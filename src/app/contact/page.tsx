'use client'

import { siteConfig } from '@/config/site'
import { Footer } from '@/components/footer'

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted')
  }

  const copyEmail = (e: React.MouseEvent) => {
    e.preventDefault()
    navigator.clipboard.writeText(siteConfig.contact.email)
    alert('Email copied to clipboard! ✅')
  }

  return (
    <>
      <main className="py-10 px-4 sm:px-0">
        {/* Header Section */}
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <div className="flex min-w-72 flex-col gap-3">
            <p className="text-gray-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">
              Let's Connect
            </p>
            <p className="text-gray-500 dark:text-[#9dabb9] text-base font-normal leading-normal">
              Open to collaboration, new opportunities, or just a chat about technology.
            </p>
          </div>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          {/* Email Card */}
          <div className="group relative flex flex-col gap-4 text-center p-6 border rounded-xl border-gray-200 dark:border-[#283039] bg-white dark:bg-[#1c2127] hover:border-primary hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300">
            <div className="mx-auto bg-primary/20 group-hover:bg-primary/30 p-4 rounded-full text-primary transition-colors">
              <span className="text-5xl group-hover:scale-110 inline-block transition-transform">📧</span>
            </div>
            <div>
              <p className="text-gray-900 dark:text-white text-lg font-bold leading-normal group-hover:text-primary transition-colors">
                Email
              </p>
              <p className="text-gray-500 dark:text-[#9dabb9] text-sm font-normal leading-normal mt-1">
                {siteConfig.contact.email}
              </p>
            </div>
            <div className="flex gap-2 mt-2">
              <a 
                href={`mailto:${siteConfig.contact.email}`}
                className="flex-1 px-4 py-2 rounded-lg bg-primary text-white text-xs font-semibold hover:bg-primary/90 transition-colors"
              >
                Open Email App
              </a>
              <button
                onClick={copyEmail}
                className="flex-1 px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white text-xs font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                Copy Email
              </button>
            </div>
          </div>

          {/* LinkedIn Card */}
          <a 
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-4 text-center p-6 border rounded-xl border-gray-200 dark:border-[#283039] bg-white dark:bg-[#1c2127] hover:border-primary hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300 cursor-pointer"
          >
            <div className="mx-auto bg-primary/20 group-hover:bg-primary/30 p-4 rounded-full text-primary transition-colors">
              <svg
                aria-hidden="true"
                className="w-10 h-10 group-hover:scale-110 transition-transform"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
              </svg>
            </div>
            <div>
              <p className="text-gray-900 dark:text-white text-lg font-bold leading-normal group-hover:text-primary transition-colors">
                LinkedIn
              </p>
              <p className="text-gray-500 dark:text-[#9dabb9] text-sm font-normal leading-normal mt-1">
                {siteConfig.social.linkedin.replace('https://', '')}
              </p>
              <p className="text-xs text-primary font-semibold mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                Visit profile →
              </p>
            </div>
          </a>

          {/* GitHub Card */}
          <a 
            href={siteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-4 text-center p-6 border rounded-xl border-gray-200 dark:border-[#283039] bg-white dark:bg-[#1c2127] hover:border-primary hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300 cursor-pointer"
          >
            <div className="mx-auto bg-primary/20 group-hover:bg-primary/30 p-4 rounded-full text-primary transition-colors">
              <svg
                aria-hidden="true"
                className="w-10 h-10 group-hover:scale-110 transition-transform"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.165 6.839 9.489.5.092.682-.218.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.378.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.855 0 1.338-.012 2.419-.012 2.745 0 .267.18.577.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z"
                  fillRule="evenodd"
                ></path>
              </svg>
            </div>
            <div>
              <p className="text-gray-900 dark:text-white text-lg font-bold leading-normal group-hover:text-primary transition-colors">
                GitHub
              </p>
              <p className="text-gray-500 dark:text-[#9dabb9] text-sm font-normal leading-normal mt-1">
                {siteConfig.social.github.replace('https://', '')}
              </p>
              <p className="text-xs text-primary font-semibold mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                View repositories →
              </p>
            </div>
          </a>
        </div>

        {/* Contact Form */}
        <div className="p-4 mt-8">
          <h2 className="text-gray-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3">
            Send a Message
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <label className="flex flex-col">
                <p className="text-gray-900 dark:text-white text-base font-medium leading-normal pb-2">
                  Full Name
                </p>
                <input
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-[#3b4754] bg-white dark:bg-[#1c2127] h-14 placeholder:text-gray-400 dark:placeholder:text-[#9dabb9] p-[15px] text-base font-normal leading-normal"
                  placeholder="Your Name"
                />
              </label>
              <label className="flex flex-col">
                <p className="text-gray-900 dark:text-white text-base font-medium leading-normal pb-2">
                  Email Address
                </p>
                <input
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-[#3b4754] bg-white dark:bg-[#1c2127] h-14 placeholder:text-gray-400 dark:placeholder:text-[#9dabb9] p-[15px] text-base font-normal leading-normal"
                  placeholder="you@example.com"
                  type="email"
                />
              </label>
            </div>
            <div>
              <label className="flex flex-col">
                <p className="text-gray-900 dark:text-white text-base font-medium leading-normal pb-2">
                  Subject
                </p>
                <select className="form-select flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-[#3b4754] bg-white dark:bg-[#1c2127] h-14 placeholder:text-gray-400 dark:placeholder:text-[#9dabb9] p-[15px] text-base font-normal leading-normal">
                  <option>Job Opportunity</option>
                  <option>Collaboration</option>
                  <option>General Question</option>
                </select>
              </label>
            </div>
            <div>
              <label className="flex flex-col">
                <p className="text-gray-900 dark:text-white text-base font-medium leading-normal pb-2">
                  Your Message
                </p>
                <textarea
                  className="form-textarea flex w-full min-w-0 flex-1 resize-y overflow-hidden rounded-xl text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-[#3b4754] bg-white dark:bg-[#1c2127] min-h-32 placeholder:text-gray-400 dark:placeholder:text-[#9dabb9] p-[15px] text-base font-normal leading-normal"
                  placeholder="Hi Serdar, I'd like to discuss..."
                ></textarea>
              </label>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="flex min-w-[120px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors"
              >
                <span className="truncate">Send Message</span>
              </button>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </>
  )
}
