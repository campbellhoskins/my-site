import { ExperiencesList } from 'app/components/experiences-server'
import { Navbar } from 'app/components/nav'

export const metadata = {
  title: 'Experience',
  description: 'View my professional experience.',
}

export default function Page() {
  return (
    <section className="flex flex-col min-h-screen">
      <div className="flex-1">
        <h1 className="font-semibold text-2xl mb-8 tracking-tighter text-neutral-900 dark:text-neutral-100">My Experience</h1>
        <Navbar />
        <div className="mt-8">
          <ExperiencesList />
        </div>
      </div>
    </section>
  )
}
