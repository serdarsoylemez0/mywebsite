import Link from 'next/link'

const projects = [
  {
    id: 'project-a',
    title: 'Project A',
    description: 'A web application that helps users manage their finances.',
    tech: 'React, Node.js, PostgreSQL',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop',
  },
  {
    id: 'project-b',
    title: 'Project B',
    description: 'A mobile app that connects people with local services.',
    tech: 'React Native, Firebase',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=450&fit=crop',
  },
  {
    id: 'project-c',
    title: 'Project C',
    description: 'A complex backend system for a large e-commerce platform.',
    tech: 'Go, Kafka, Kubernetes',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=450&fit=crop',
  },
]

export function WorkPreview() {
  return (
    <div className="relative py-20 sm:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent dark:via-primary/10" />
      
      <div className="relative px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full bg-primary/10 dark:bg-primary/20 text-primary text-sm font-semibold">
              Featured Work
            </span>
          </div>
          <h2 className="text-gray-900 dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.015em] mb-4">
            My Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Here's a selection of projects that showcase my skills in creating high-quality digital products.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Link 
              key={project.id} 
              href={`/work/${project.id}`} 
              className="group flex flex-col gap-5 bg-white dark:bg-[#1a242f] rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden aspect-video">
                <div
                  className="w-full h-full bg-center bg-no-repeat bg-cover transform group-hover:scale-110 transition-transform duration-700"
                  style={{ backgroundImage: `url('${project.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                  <div className="p-2 rounded-full bg-white dark:bg-gray-900 shadow-lg">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="px-6 pb-6 flex flex-col gap-3">
                <h3 className="text-gray-900 dark:text-white text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tech.split(', ').map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 dark:bg-primary/20 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-16 animate-fade-in-up stagger-3">
          <Link 
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-white text-base font-bold shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:scale-105 transition-all duration-300"
          >
            <span>View All Projects</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}
