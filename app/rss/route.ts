import { baseUrl } from 'app/sitemap'
import { getProjects } from 'app/projects/utils'

export async function GET() {
  let allProjects = await getProjects()

  const itemsXml = allProjects
    .sort((a, b) => {
      if (new Date(a.metadata.completedAt) > new Date(b.metadata.completedAt)) {
        return -1
      }
      return 1
    })
    .map(
      (project) =>
        `<item>
          <title>${project.metadata.title}</title>
          <link>${baseUrl}/projects/${project.slug}</link>
          <description>${project.metadata.summary || ''}</description>
          <pubDate>${new Date(
            project.metadata.completedAt
          ).toUTCString()}</pubDate>
        </item>`
    )
    .join('\n')

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
        <title>My Portfolio</title>
        <link>${baseUrl}</link>
        <description>This is my portfolio RSS feed</description>
        ${itemsXml}
    </channel>
  </rss>`

  return new Response(rssFeed, {
    headers: {
      'Content-Type': 'text/xml',
    },
  })
}
