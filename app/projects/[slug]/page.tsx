import { notFound } from 'next/navigation'
import { formatDate, getProjects } from 'app/projects/utils'
import { baseUrl } from 'app/sitemap'
import { Navbar } from 'app/components/nav'
import { Badge } from '../../components/ui/badge'
import { Button } from '../../components/ui/button'

export async function generateStaticParams() {
  let projects = getProjects()

  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export function generateMetadata({ params }) {
  let project = getProjects().find((project) => project.slug === params.slug)
  if (!project) {
    return
  }

  let {
    title,
    completedAt: publishedTime,
    summary: description,
    image,
  } = project.metadata
  let ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${baseUrl}/projects/${project.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

export default function Project({ params }) {
  let project = getProjects().find((project) => project.slug === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CreativeWork',
            headline: project.metadata.title,
            dateCreated: project.metadata.completedAt,
            dateModified: project.metadata.completedAt,
            description: project.metadata.summary,
            image: project.metadata.image
              ? `${baseUrl}${project.metadata.image}`
              : `/og?title=${encodeURIComponent(project.metadata.title)}`,
            url: `${baseUrl}/projects/${project.slug}`,
            author: {
              '@type': 'Person',
              name: 'My Portfolio',
            },
          }),
        }}
      />
      <h1 className="title font-semibold text-2xl tracking-tighter text-neutral-900 dark:text-neutral-100">
        {project.metadata.title}
      </h1>
      <Navbar />
      <div className="flex justify-between items-center mt-2 mb-8 text-sm">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Completed {formatDate(project.metadata.completedAt)}
        </p>
        {project.metadata.technologies && Array.isArray(project.metadata.technologies) && (
          <div className="flex flex-wrap gap-2">
            {project.metadata.technologies.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="text-xs"
              >
                {tech}
              </Badge>
            ))}
          </div>
        )}
      </div>
      {(project.metadata.githubUrl || project.metadata.liveUrl) && (
        <div className="flex gap-4 mb-8">
          {project.metadata.githubUrl && (
            <Button variant="outline" asChild>
              <a
                href={project.metadata.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </Button>
          )}
          {project.metadata.liveUrl && (
            <Button variant="outline" asChild>
              <a
                href={project.metadata.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            </Button>
          )}
        </div>
      )}
      <article className="prose">
        <div className="whitespace-pre-wrap">{project.content}</div>
      </article>
    </section>
  )
}
