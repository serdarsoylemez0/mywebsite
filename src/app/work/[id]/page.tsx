import Link from 'next/link'
import { Footer } from '@/components/footer'

// Generate static paths for all projects
export function generateStaticParams() {
  return [
    { id: 'project-a' },
    { id: 'project-b' },
    { id: 'project-c' },
  ]
}

// Sample project data - in a real app, this would come from a database or CMS
const projectData: Record<string, any> = {
  'project-a': {
    title: 'QuantumLeap AI',
    subtitle: 'An advanced AI-powered platform for predictive data analysis and real-time decision-making.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=675&fit=crop',
    context: 'Businesses struggled with slow, inaccurate data analysis from massive datasets, leading to missed opportunities and inefficient operations. Existing tools were either too complex for non-technical users or lacked the power to process information in real-time, creating a significant bottleneck in strategic decision-making. The project operated under a tight six-month deadline and a limited budget. Key constraints included the need for the final product to integrate seamlessly with legacy systems, ensure enterprise-grade security for sensitive data, and maintain high performance under heavy concurrent user loads. The team was small, requiring highly efficient development practices. We architected a scalable microservices-based platform using Kubernetes for orchestration. A custom machine learning model was developed with TensorFlow for predictive analytics, and a real-time data ingestion pipeline was built with Kafka and Spark. The frontend was a responsive React application with a component library designed for simplicity and accessibility, providing intuitive data visualizations with D3.js. The platform launch resulted in a 40% reduction in data processing time for clients and increased predictive accuracy by 30%. User adoption was high, with a 25% increase in user engagement within the first quarter. The solution successfully handled peak loads of over 10,000 concurrent users without performance degradation.',
    techStack: ['React', 'Node.js', 'Kubernetes', 'Python', 'TensorFlow', 'PostgreSQL', 'Docker', 'Kafka'],
    githubUrl: 'https://github.com/yourusername/quantumleap-ai', // Add your GitHub repo URL here
  },
  'project-b': {
    title: 'Mobile Banking App',
    subtitle: 'A secure and user-friendly mobile banking application with features like fund transfer, bill payments, and account management.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&h=675&fit=crop',
    context: 'Traditional banking apps had poor user experience and lacked modern security features, leading to low adoption rates among younger demographics. Strict regulatory compliance requirements, need for bank-grade security, and compatibility with both iOS and Android platforms. Built a cross-platform mobile application using React Native with biometric authentication, end-to-end encryption, and real-time transaction monitoring. Achieved 500K+ downloads in the first 6 months, 4.8-star rating on app stores, and 60% reduction in customer support calls.',
    techStack: ['React Native', 'Firebase', 'AWS', 'DynamoDB', 'Swift', 'Kotlin'],
    githubUrl: 'https://github.com/yourusername/mobile-banking-app', // Add your GitHub repo URL here
  },
  'project-c': {
    title: 'E-commerce Platform',
    subtitle: 'A scalable e-commerce platform handling millions of transactions with real-time inventory management.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=675&fit=crop',
    context: 'Existing platform couldn\'t handle peak traffic during sales events, resulting in lost revenue and poor customer experience. Had to migrate from legacy system without downtime, maintain SEO rankings, and support international payments. Implemented a microservices architecture with CDN caching, database sharding, and horizontal scaling capabilities using Kubernetes. Handled 10x traffic increase during Black Friday with 99.99% uptime, reduced page load time by 60%, and increased conversion rate by 35%.',
    techStack: ['Next.js', 'Go', 'Kafka', 'Redis', 'PostgreSQL', 'Kubernetes', 'Stripe'],
    githubUrl: 'https://github.com/yourusername/ecommerce-platform', // Add your GitHub repo URL here
  },
}

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = projectData[params.id] || projectData['project-a']

  return (
    <>
      <main className="flex flex-1 justify-center py-5 px-4 md:px-40">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        {/* Breadcrumb */}
        <div className="flex flex-wrap gap-2 p-4">
          <Link
            href="/projects"
            className="text-gray-500 dark:text-[#9dabb9] text-base font-medium leading-normal hover:text-primary"
          >
            Projects
          </Link>
          <span className="text-gray-500 dark:text-[#9dabb9] text-base font-medium leading-normal">
            /
          </span>
          <span className="text-gray-900 dark:text-white text-base font-medium leading-normal">
            {project.title}
          </span>
        </div>

        {/* Header */}
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <div className="flex min-w-72 flex-col gap-3">
            <p className="text-gray-900 dark:text-white text-4xl lg:text-5xl font-black leading-tight tracking-[-0.033em]">
              {project.title}
            </p>
            <p className="text-gray-600 dark:text-[#9dabb9] text-lg font-normal leading-normal">
              {project.subtitle}
            </p>
          </div>
        </div>

        {/* Hero Image */}
        <div className="p-4">
          <div className="w-full gap-1 overflow-hidden bg-background-light dark:bg-background-dark aspect-[16/9] flex rounded-xl">
            <div
              className="w-full bg-center bg-no-repeat bg-cover aspect-auto flex-1"
              style={{ backgroundImage: `url('${project.image}')` }}
            />
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-4">
          {/* Main Content */}
          <div className="md:col-span-2">
            <section>
              <h2 className="text-gray-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-5">
                Context
              </h2>
              <p className="text-gray-600 dark:text-[#9dabb9] text-base font-normal leading-relaxed">
                {project.context}
              </p>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="md:col-span-1">
            <div className="sticky top-24">
              <h2 className="text-gray-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-5">
                Tech Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech: string) => (
                  <span
                    key={tech}
                    className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary dark:bg-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex flex-col gap-4">
                {project.githubUrl && (
                  <a
                    className="flex w-full items-center justify-center rounded-xl h-12 px-6 bg-gray-900 dark:bg-gray-700 text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="truncate">See on GitHub</span>
                  </a>
                )}
              </div>
            </div>
          </aside>
        </div>
      </div>
      </main>
      <Footer />
    </>
  )
}
