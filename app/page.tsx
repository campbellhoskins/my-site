import { ProjectsList } from 'app/components/projects-server'
import { ExperiencesList } from 'app/components/experiences-server'
import { Navbar } from 'app/components/nav'
import { SocialLinks } from 'app/components/social-links'

export default function Page() {
  return (
    <>
      <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
            <a href="/">Campbell Hoskins</a>
          </h1>
          <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
            Software Engineer | Stanford AI/ML Graduate
          </h2>
          <p className="mt-4 max-w-xs leading-normal">
            Engineering tools, exploring possibilities
          </p>
          <div className="mt-8 flex items-start gap-6">
            <img 
              src="/headshot_color.jpg" 
              alt="Campbell Hoskins" 
              className="w-44 h-44 rounded-full object-cover flex-shrink-0"
            />
            <nav className="nav hidden lg:block flex-1" aria-label="In-page jump links">
              <Navbar />
            </nav>
          </div>
        </div>
        <ul className="ml-1 mt-24 mb-1 flex items-center" aria-label="Social media">
          <SocialLinks />
        </ul>
      </header>
      
      <main id="content" className="pt-24 lg:w-[52%] lg:py-24">
        <section id="about" className="scroll-mt-24">
          <div className="text-base text-slate-400 leading-relaxed space-y-4">
            <p>
              I'm a software engineer passionate about building <strong className="text-slate-200">cutting-edge tools that solve real-world problems</strong>. I love tackling tough challenges—digging deep to understand them, exploring new ideas, and finding the most efficient solutions in a world where new technologies emerge every day.
            </p>
            <p>
              Currently, I'm a software engineer working to <strong className="text-slate-200">integrate AI into the Windows Performance Analyzer application at Microsoft</strong>. My team is focused on helping users more easily diagnose and solve system performance issues. I've had the chance to work at both a <strong className="text-slate-200">small fintech startup and in big tech</strong>, and I'm always eager to connect with people who are building creative solutions to interesting problems.
            </p>
            <p>
              My time at <strong className="text-slate-200">Stanford University studying Artificial Intelligence and Machine Learning</strong> not only sharpened my ability to write code and build advanced systems, but also reinforced the importance of connecting with people, asking the right questions, and fostering genuine conversations that lead to better solutions. To me, software is just as much about people as it is about technology.
            </p>
            <p>
              Outside of work, I enjoy disappearing into the mountains on a camping trip, improving my Spanish, and playing pickleball with my roommates. Whenever I get the chance, I'm out backpacking the world, learning about new cultures firsthand.
            </p>
          </div>
        </section>
        
        <section id="experience" className="scroll-mt-24">
          <h2 className="mb-6 text-xl font-semibold tracking-tighter mt-32 text-slate-200">
            Experience
          </h2>
          <ExperiencesList />
          <div className="mt-8">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-slate-400 hover:text-slate-200 transition-colors duration-200 group"
            >
              <span className="mr-2">View Resume Here</span>
              <svg
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </section>
        
        <section id="projects" className="scroll-mt-24">
          <h2 className="mb-6 text-xl font-semibold tracking-tighter mt-32 text-slate-200">
            Projects
          </h2>
          <ProjectsList />
          <div className="mt-8">
            <a
              href="https://github.com/campbellhoskins"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-slate-400 hover:text-slate-200 transition-colors duration-200 group"
            >
              <span className="mr-2">View My GitHub</span>
              <svg
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </section>
        
        <section id="contact" className="scroll-mt-24">
          <h2 className="mb-6 text-xl font-semibold tracking-tighter mt-32 text-slate-200">
            Contact
          </h2>
          <div className="text-base text-slate-400 leading-relaxed">
            <p>
              Please feel free to reach out to me via{' '}
              <a
                href="https://linkedin.com/in/campbellhoskins"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-200 hover:text-white transition-colors duration-200 underline"
              >
                LinkedIn
              </a>{' '}
              or email me at{' '}
              <a
                href="mailto:campbellhoskins@gmail.com"
                className="text-slate-200 hover:text-white transition-colors duration-200 underline"
              >
                campbellhoskins@gmail.com
              </a>
            </p>
          </div>
        </section>
        <div className="h-screen"></div>
      </main>
    </>
  )
}
