'use client'

import { formatDate } from 'app/projects/date-utils'
import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'

type Project = {
  metadata: {
    title: string
    completedAt: string
    summary: string
    image?: string
    technologies?: string | string[]
    githubUrl?: string
    liveUrl?: string
  }
  slug: string
  content: string
}

interface ProjectsListClientProps {
  projects: Project[]
}

export function ProjectsListClient({ projects }: ProjectsListClientProps) {
  return (
    <div className="space-y-6">
      {projects
        .sort((a, b) => {
          if (
            new Date(a.metadata.completedAt) > new Date(b.metadata.completedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((project) => {
          // Determine the primary link (prefer live URL over GitHub URL)
          const primaryUrl = project.metadata.liveUrl || project.metadata.githubUrl
          const linkType = project.metadata.liveUrl ? 'live' : 'github'
          
          return (
            <Card key={project.slug} className="group cursor-pointer">
              <CardContent>
                <a
                  href={primaryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="flex flex-col space-y-4">
                    {/* Header with date */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-400 tabular-nums">
                        {formatDate(project.metadata.completedAt, false)}
                      </span>
                    </div>
                    
                    {/* Project title and description */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-semibold text-slate-200 group-hover:text-white transition-colors">
                          {project.metadata.title}
                        </h3>
                        <svg 
                          className="w-4 h-4 text-slate-400 group-hover:text-slate-200 transition-colors" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                      <p className="text-sm text-slate-400 leading-relaxed">
                        {project.metadata.summary}
                      </p>
                    </div>
                    
                    {/* Technologies */}
                    {project.metadata.technologies && Array.isArray(project.metadata.technologies) && (
                      <div className="flex flex-wrap gap-2">
                        {project.metadata.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="text-xs bg-slate-700/50 text-slate-300 border-slate-600/50 hover:bg-slate-700/70 transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </a>
              </CardContent>
            </Card>
          )
        })}
    </div>
  )
}
