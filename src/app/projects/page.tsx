import { Footer } from '@/components/footer'
import { siteConfig } from '@/config/site'
import Link from 'next/link'

const projects = [
  {
    id: 1,
    title: 'E-commerce Analytics Dashboard',
    description:
      'A real-time analytics platform for e-commerce businesses, providing insights into sales, customer behavior, and inventory management.',
    tech: 'React, Node.js, PostgreSQL, D3.js',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop',
  },
  {
    id: 2,
    title: 'Mobile Banking App',
    description:
      'A secure and user-friendly mobile banking application with features like fund transfer, bill payments, and account management.',
    tech: 'Swift, Kotlin, AWS, DynamoDB',
    image:
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=450&fit=crop',
  },
  {
    id: 3,
    title: 'AI-Powered Chatbot',
    description:
      'A conversational AI chatbot for customer support, capable of understanding and responding to user queries in natural language.',
    tech: 'Python, TensorFlow, Dialogflow',
    image:
      'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=450&fit=crop',
  },
]

export default function ProjectsPage() {
  return (
    <>
      <main className="flex-1">
        <div className="flex flex-wrap justify-between gap-3 p-4 py-10">
          <p className="text-gray-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em] min-w-72">
            My Work
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
          {projects.map(project => (
            <div
              key={project.id}
              className="flex flex-col gap-4 bg-gray-100 dark:bg-[#1a232b] p-6 rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-1"
            >
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                style={{ backgroundImage: `url('${project.image}')` }}
              />
              <div className="flex flex-col gap-3 flex-1">
                <p className="text-gray-900 dark:text-white text-xl font-bold leading-normal">
                  {project.title}
                </p>
                <p className="text-gray-600 dark:text-[#9dabb9] text-sm font-normal leading-normal">
                  {project.description}
                </p>
                <p className="text-gray-600 dark:text-[#9dabb9] text-xs font-mono">
                  {project.tech}
                </p>
              </div>
              <Link 
                href={`/work/project-${String.fromCharCode(96 + project.id)}`}
                className="flex mt-auto w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors"
              >
                <span className="truncate">View Project</span>
              </Link>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}
