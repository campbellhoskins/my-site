'use client'

import Link from 'next/link'
import { formatDateRange } from 'app/experiences/date-utils'
import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'

type Experience = {
  metadata: {
    title: string
    company: string
    startDate: string
    endDate?: string
    summary: string
    image?: string
    technologies?: string | string[]
    location?: string
    type?: string
  }
  slug: string
  content: string
}

interface ExperiencesListClientProps {
  experiences: Experience[]
}

export function ExperiencesListClient({ experiences }: ExperiencesListClientProps) {
  return (
    <div className="space-y-6">
      {experiences
        .sort((a, b) => {
          if (
            new Date(a.metadata.startDate) > new Date(b.metadata.startDate)
          ) {
            return -1
          }
          return 1
        })
        .map((experience) => (
          <Card key={experience.slug} className="group cursor-pointer">
            <CardContent>
              <Link href={`/experiences/${experience.slug}`} className="block">
                <div className="flex flex-col space-y-4">
                  {/* Header with date range and type */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-400 tabular-nums">
                      {formatDateRange(experience.metadata.startDate, experience.metadata.endDate)}
                    </span>
                    {experience.metadata.type && (
                      <span className="text-xs text-slate-500 bg-slate-700/50 px-2 py-1 rounded">
                        {experience.metadata.type}
                      </span>
                    )}
                  </div>
                  
                  {/* Job title and company */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-slate-200 group-hover:text-white transition-colors">
                      {experience.metadata.title}
                    </h3>
                    <p className="text-sm text-slate-400">
                      {experience.metadata.company}
                      {experience.metadata.location && (
                        <span className="text-slate-500"> • {experience.metadata.location}</span>
                      )}
                    </p>
                  </div>
                  
                  {/* Summary */}
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {experience.metadata.summary}
                  </p>
                  
                  {/* Technologies */}
                  {experience.metadata.technologies && Array.isArray(experience.metadata.technologies) && (
                    <div className="flex flex-wrap gap-2">
                      {experience.metadata.technologies.map((tech) => (
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
              </Link>
            </CardContent>
          </Card>
        ))}
    </div>
  )
}
