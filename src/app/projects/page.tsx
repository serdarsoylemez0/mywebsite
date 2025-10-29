import { Footer } from '@/components/footer'
import { fetchGitHubRepos } from '@/lib/github'

export default async function ProjectsPage() {
  const projects = await fetchGitHubRepos()
  return (
    <>
      <main className="flex-1">
        <div className="flex flex-wrap justify-between gap-3 p-4 py-10">
          <div>
            <p className="text-gray-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em] min-w-72">
              My GitHub Projects
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-lg mt-2">
              Explore my open-source contributions and personal projects
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
          {projects.map(project => (
            <a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col gap-4 bg-gray-100 dark:bg-[#1a232b] p-6 rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-1"
            >
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                style={{ backgroundImage: `url('${project.image}')` }}
              />
              <div className="flex flex-col gap-3 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <p className="text-gray-900 dark:text-white text-xl font-bold leading-normal flex-1">
                    {project.title}
                  </p>
                  {project.stars > 0 && (
                    <div className="flex items-center gap-1 text-yellow-500">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-xs font-semibold">{project.stars}</span>
                    </div>
                  )}
                </div>
                <p className="text-gray-600 dark:text-[#9dabb9] text-sm font-normal leading-normal">
                  {project.description}
                </p>
                <p className="text-gray-600 dark:text-[#9dabb9] text-xs font-mono">
                  {project.tech}
                </p>
              </div>
              <div className="flex mt-auto w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
                <span className="truncate">View on GitHub</span>
              </div>
            </a>
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}
