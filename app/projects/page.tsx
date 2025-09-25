import { ProjectsList } from 'app/components/projects-server'
import { Navbar } from 'app/components/nav'

export const metadata = {
  title: 'Projects',
  description: 'View my projects.',
}

export default function Page() {
  return (
    <section className="flex flex-col min-h-screen">
      <div className="flex-1">
        <h1 className="font-semibold text-2xl mb-8 tracking-tighter text-neutral-900 dark:text-neutral-100">My Projects</h1>
        <Navbar />
        <div className="mt-8">
          <ProjectsList />
        </div>
      </div>
    </section>
  )
}
