import { notFound } from 'next/navigation'
import { getExperiences } from 'app/experiences/utils'
import { Navbar } from 'app/components/nav'
import { Badge } from '../../components/ui/badge'
import ReactMarkdown from 'react-markdown'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  let experiences = getExperiences()

  return experiences.map((experience) => ({
    slug: experience.slug,
  }))
}

export async function generateMetadata({ params }: Props) {
  let experiences = getExperiences()
  let resolvedParams = await params
  let experience = experiences.find((experience) => experience.slug === resolvedParams.slug)

  if (!experience) {
    return {
      title: 'Experience Not Found',
    }
  }

  let { metadata } = experience
  return {
    title: `${metadata.title} at ${metadata.company}`,
    description: metadata.summary,
  }
}

export default async function Experience({ params }: Props) {
  let experiences = getExperiences()
  let resolvedParams = await params
  let experience = experiences.find((experience) => experience.slug === resolvedParams.slug)

  if (!experience) {
    notFound()
  }

  let { metadata, content } = experience

  return (
    <section className="flex-1 max-w-2xl">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tighter mb-2 text-neutral-900 dark:text-neutral-100">
          {metadata.title}
        </h1>
        <Navbar />
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-neutral-600 dark:text-neutral-400 mb-4">
          <p className="font-medium">{metadata.company}</p>
          <p>{metadata.location}</p>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-neutral-500 dark:text-neutral-500 mb-4">
          <p>{metadata.startDate} - {metadata.endDate || 'Present'}</p>
          {metadata.type && <p>{metadata.type}</p>}
        </div>
        <p className="text-neutral-600 dark:text-neutral-400 mb-6">
          {metadata.summary}
        </p>
        {metadata.technologies && Array.isArray(metadata.technologies) && (
          <div className="flex flex-wrap gap-2 mb-6">
            {metadata.technologies.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="text-sm"
              >
                {tech}
              </Badge>
            ))}
          </div>
        )}
      </div>
      <div className="prose prose-neutral dark:prose-invert">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </section>
  )
}
