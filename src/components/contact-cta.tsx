import { Mail, MessageSquare } from 'lucide-react'
import Link from 'next/link'

export function ContactCTA() {
  return (
    <section className="container py-24 bg-muted/30">
      <div className="mx-auto max-w-3xl text-center">
        <div className="p-3 rounded-full bg-primary/10 w-fit mx-auto mb-6">
          <MessageSquare className="h-8 w-8 text-primary" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Build Something Great</h2>
        <p className="text-lg text-muted-foreground mb-8">
          I'm always interested in hearing about new projects and opportunities.
          Whether you have a question or just want to say hi, feel free to reach out.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            <Mail className="h-4 w-4" />
            Get in Touch
          </Link>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-8 py-3 text-sm font-medium hover:bg-accent transition-colors"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}
