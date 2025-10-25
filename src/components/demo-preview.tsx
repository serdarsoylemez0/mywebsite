import { Play, Code, Activity } from 'lucide-react'
import Link from 'next/link'

const demos = [
  {
    id: 'async-visualizer',
    title: 'Async Patterns Visualizer',
    description: 'Interactive comparison of debounce, throttle, and requestAnimationFrame',
    icon: Activity,
  },
  {
    id: 'code-playground',
    title: 'Live Code Playground',
    description: 'Run TypeScript/JavaScript snippets in a sandboxed Web Worker',
    icon: Code,
  },
  {
    id: 'latency-explorer',
    title: 'Latency Budget Explorer',
    description: 'Visualize how API hops compound p95 latency',
    icon: Play,
  },
]

export function DemoPreview() {
  return (
    <section className="container py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Interactive Demos</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hands-on demonstrations of engineering concepts and patterns
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {demos.map(demo => {
            const Icon = demo.icon
            return (
              <Link
                key={demo.id}
                href={`/demos#${demo.id}`}
                className="group flex flex-col items-center text-center p-8 rounded-lg border border-border bg-card hover:shadow-lg hover:border-primary/50 transition-all"
              >
                <div className="p-4 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {demo.title}
                </h3>
                <p className="text-sm text-muted-foreground">{demo.description}</p>
              </Link>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/demos"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            <Play className="h-4 w-4" />
            Try All Demos
          </Link>
        </div>
      </div>
    </section>
  )
}
