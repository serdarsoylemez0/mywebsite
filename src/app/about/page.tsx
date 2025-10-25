import { siteConfig } from '@/config/site'
import { Footer } from '@/components/footer'

export default function AboutPage() {
  return (
    <>
      {/* Hero Section with Profile */}
      <div className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5 dark:from-primary/10 dark:to-blue-500/10" />
        <div className="relative flex flex-col md:flex-row items-center gap-10 max-w-5xl mx-auto animate-fade-in-up">
          <div className="flex-shrink-0 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-600 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity" />
              <div
                className="relative bg-center bg-no-repeat aspect-square bg-cover rounded-full h-48 w-48 border-4 border-white dark:border-gray-800 shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
                style={{
                  backgroundImage: `url("${siteConfig.profileImage}")`,
                }}
              />
            </div>
          </div>
          <div className="text-center md:text-left flex-1">
            <div className="inline-block mb-4 animate-fade-in-up">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 dark:bg-primary/20 border border-primary/30 text-primary dark:text-blue-400 text-sm font-semibold">
                <span className="text-base animate-wave inline-block">👋</span>
                <span>Hello, I'm {siteConfig.name.split(' ')[0]}</span>
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-4">
              {siteConfig.title}
            </h1>
            <p className="mt-3 text-lg md:text-xl text-gray-600 dark:text-[#9dabb9] leading-relaxed">
              {siteConfig.tagline}
            </p>
            <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
              <a href="/cv.pdf" download className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 text-white text-sm font-semibold shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/40 hover:scale-105 transition-all duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Download CV</span>
              </a>
              <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white text-sm font-semibold hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-1">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                <span>LinkedIn</span>
              </a>
              <a href={siteConfig.social.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white text-sm font-semibold shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:scale-105 transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* About Me Section */}
      <div className="px-4 py-16 max-w-4xl mx-auto animate-fade-in-up stagger-1" id="about">
        <div className="mb-6">
          <span className="px-3 py-1 rounded-full bg-primary/10 dark:bg-primary/20 text-primary text-sm font-semibold">About Me</span>
        </div>
        <h2 className="text-gray-900 dark:text-white text-3xl md:text-4xl font-bold leading-tight tracking-tight mb-6">
          Passionate about building great software
        </h2>
        <p className="text-gray-600 dark:text-[#9dabb9] text-lg leading-relaxed">
          {siteConfig.bio}
        </p>
      </div>

      {/* Skills Section */}
      <div className="px-4 py-16 bg-gray-50 dark:bg-[#0a0f16] animate-fade-in-up stagger-2" id="skills">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="px-3 py-1 rounded-full bg-primary/10 dark:bg-primary/20 text-primary text-sm font-semibold">Tech Stack</span>
            <h2 className="text-gray-900 dark:text-white text-3xl md:text-4xl font-bold leading-tight tracking-tight mt-4">
              Skills & Technologies
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {siteConfig.skills.map((skill, index) => (
              <a
                key={skill.name}
                href={skill.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-3 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1a242f] p-6 items-center text-center hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 hover:border-primary transition-all duration-300 animate-fade-in-up cursor-pointer"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="text-4xl group-hover:scale-110 transition-transform">{skill.icon}</div>
                <h3 className="text-gray-900 dark:text-white text-sm font-bold group-hover:text-primary transition-colors">
                  {skill.name}
                </h3>
                <span className="text-xs text-gray-500 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  Visit website →
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="px-4 py-8" id="experience">
        <h2 className="text-gray-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-5">
          Experience
        </h2>
        <div className="relative border-l-2 border-gray-300 dark:border-[#283039] pl-8 space-y-12">
          {siteConfig.experience.map((exp, index) => (
            <div key={index}>
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-2 mt-1.5"></div>
              <p className="text-sm text-gray-600 dark:text-[#9dabb9]">{exp.period}</p>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mt-1">
                {exp.title}, {exp.company}
              </h3>
              <p className="text-gray-700 dark:text-white mt-1">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Education Section */}
      <div className="px-4 py-8" id="education">
        <h2 className="text-gray-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3">
          Education
        </h2>
        <div className="bg-gray-100 dark:bg-[#1c2127] border border-gray-300 dark:border-[#3b4754] rounded-lg p-4">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">
            {siteConfig.education.degree}
          </h3>
          <p className="text-gray-600 dark:text-[#9dabb9]">
            {siteConfig.education.school}, {siteConfig.education.period}
          </p>
        </div>
      </div>

      {/* Languages Section */}
      <div className="px-4 py-8" id="languages">
        <h2 className="text-gray-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-5">
          Languages
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Turkish - Native */}
          <div className="bg-gradient-to-br from-red-50 to-white dark:from-red-900/10 dark:to-[#1c2127] border-2 border-red-200 dark:border-red-800/30 rounded-xl p-5 hover:shadow-lg hover:shadow-red-500/10 transition-all duration-300">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">🇹🇷</span>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Turkish</h3>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-red-600 text-white text-xs font-bold">Native</span>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map(i => (
                  <div key={i} className="w-2 h-2 rounded-full bg-red-600"></div>
                ))}
              </div>
            </div>
          </div>

          {/* English - Fluent */}
          <div className="bg-gradient-to-br from-blue-50 to-white dark:from-blue-900/10 dark:to-[#1c2127] border-2 border-blue-200 dark:border-blue-800/30 rounded-xl p-5 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">🇬🇧</span>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">English</h3>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-bold">Fluent</span>
              <div className="flex gap-1">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-2 h-2 rounded-full bg-blue-600"></div>
                ))}
                <div className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600"></div>
              </div>
            </div>
          </div>

          {/* German - Elementary */}
          <div className="bg-gradient-to-br from-yellow-50 to-white dark:from-yellow-900/10 dark:to-[#1c2127] border-2 border-yellow-200 dark:border-yellow-800/30 rounded-xl p-5 hover:shadow-lg hover:shadow-yellow-500/10 transition-all duration-300">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">🇩🇪</span>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">German</h3>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-yellow-600 text-white text-xs font-bold">Elementary</span>
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-yellow-600"></div>
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Personal Interests Section */}
      <div className="px-4 py-8" id="interests">
        <h2 className="text-gray-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3">
          Personal Interests
        </h2>
        <div className="flex flex-wrap gap-2">
          {siteConfig.interests.map(interest => (
            <span
              key={interest}
              className="bg-gray-100 dark:bg-[#1c2127] border border-gray-300 dark:border-[#3b4754] text-gray-900 dark:text-white text-sm font-medium me-2 px-2.5 py-0.5 rounded-full"
            >
              {interest}
            </span>
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}
