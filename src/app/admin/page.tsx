'use client'

import { useState } from 'react'
import { siteConfig } from '@/config/site'

export default function AdminPanel() {
  const [config, setConfig] = useState(siteConfig)
  const [activeTab, setActiveTab] = useState<'personal' | 'contact' | 'social' | 'skills' | 'experience' | 'projects'>('personal')
  const [showPhotoModal, setShowPhotoModal] = useState(false)
  const [showWelcome, setShowWelcome] = useState(true)

  const copyToClipboard = () => {
    const configString = `export const siteConfig = ${JSON.stringify(config, null, 2)}`
    navigator.clipboard.writeText(configString)
    alert('✅ Configuration copied! Paste it into src/config/site.ts')
  }

  const tabs = [
    { id: 'personal', label: '👤 Personal Info', icon: '👤' },
    { id: 'contact', label: '📧 Contact', icon: '📧' },
    { id: 'social', label: '🔗 Social Links', icon: '🔗' },
    { id: 'projects', label: '📁 Projects', icon: '📁' },
    { id: 'skills', label: '💻 Skills', icon: '💻' },
    { id: 'experience', label: '💼 Experience', icon: '💼' },
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0a0f16] py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white dark:bg-[#1c2127] rounded-xl shadow-lg p-4 sm:p-6 mb-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                ⚙️ Admin Panel
              </h1>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                Easily manage your portfolio website content
              </p>
            </div>
            <button
              onClick={copyToClipboard}
              className="w-full sm:w-auto px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
            >
              📋 Copy Config
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white dark:bg-[#1c2127] rounded-xl shadow-lg mb-6 overflow-hidden">
          <div className="flex overflow-x-auto border-b border-gray-200 dark:border-gray-700">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex-1 min-w-[120px] px-3 sm:px-6 py-3 sm:py-4 font-semibold transition-colors text-sm sm:text-base ${
                  activeTab === tab.id
                    ? 'bg-primary text-white border-b-2 border-primary'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                }`}
              >
                <span className="text-base sm:text-lg mr-1 sm:mr-2">{tab.icon}</span>
                <span className="hidden sm:inline">{tab.label}</span>
                <span className="sm:hidden">{tab.label.split(' ')[1]}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="bg-white dark:bg-[#1c2127] rounded-xl shadow-lg p-4 sm:p-6">
          {/* Personal Info Tab */}
          {activeTab === 'personal' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Personal Information
              </h2>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  value={config.name}
                  onChange={(e) => setConfig({ ...config, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#0a0f16] text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Job Title
                </label>
                <input
                  type="text"
                  value={config.title}
                  onChange={(e) => setConfig({ ...config, title: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#0a0f16] text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Software Engineer"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Tagline
                </label>
                <textarea
                  value={config.tagline}
                  onChange={(e) => setConfig({ ...config, tagline: e.target.value })}
                  rows={2}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#0a0f16] text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Your professional tagline"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Bio
                </label>
                <textarea
                  value={config.bio}
                  onChange={(e) => setConfig({ ...config, bio: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#0a0f16] text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Tell us about yourself..."
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Profile Image URL
                </label>
                <input
                  type="text"
                  value={config.profileImage}
                  onChange={(e) => setConfig({ ...config, profileImage: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#0a0f16] text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="/profile.jpg or https://..."
                />
                {config.profileImage && (
                  <div className="mt-4">
                    <img
                      src={config.profileImage}
                      alt="Preview"
                      onClick={() => setShowPhotoModal(true)}
                      className="w-32 h-32 rounded-full object-cover border-4 border-primary shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
                      title="Click to view full size"
                    />
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                      Click image to view full size
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Contact Tab */}
          {activeTab === 'contact' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Contact Information
              </h2>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={config.contact.email}
                  onChange={(e) => setConfig({ 
                    ...config, 
                    contact: { ...config.contact, email: e.target.value }
                  })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#0a0f16] text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Location (Optional)
                </label>
                <input
                  type="text"
                  value={config.contact.location || ''}
                  onChange={(e) => setConfig({ 
                    ...config, 
                    contact: { ...config.contact, location: e.target.value }
                  })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#0a0f16] text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="San Francisco, CA"
                />
              </div>
            </div>
          )}

          {/* Social Links Tab */}
          {activeTab === 'social' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Social Media Links
              </h2>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  🐙 GitHub
                </label>
                <input
                  type="url"
                  value={config.social.github}
                  onChange={(e) => setConfig({ 
                    ...config, 
                    social: { ...config.social, github: e.target.value }
                  })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#0a0f16] text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="https://github.com/username"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  💼 LinkedIn
                </label>
                <input
                  type="url"
                  value={config.social.linkedin}
                  onChange={(e) => setConfig({ 
                    ...config, 
                    social: { ...config.social, linkedin: e.target.value }
                  })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#0a0f16] text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="https://linkedin.com/in/username"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  🌐 Website
                </label>
                <input
                  type="url"
                  value={config.social.website || ''}
                  onChange={(e) => setConfig({ 
                    ...config, 
                    social: { ...config.social, website: e.target.value }
                  })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#0a0f16] text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="https://yourwebsite.com"
                />
              </div>
            </div>
          )}

          {/* Projects Tab */}
          {activeTab === 'projects' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                📁 Manage Projects
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Your projects are defined in <code className="bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded">src/app/projects/page.tsx</code>
              </p>
              
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-6">
                <h3 className="font-bold text-blue-900 dark:text-blue-300 mb-2">📝 How to Edit Projects</h3>
                <ol className="list-decimal list-inside space-y-1 text-sm text-blue-800 dark:text-blue-200">
                  <li>Open <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">src/app/projects/page.tsx</code></li>
                  <li>Find the <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">projects</code> array at the top</li>
                  <li>Edit project details (title, description, tech, image)</li>
                  <li>Save the file - changes appear instantly!</li>
                </ol>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Project Structure Example:</h3>
                <div className="bg-gray-100 dark:bg-[#0a0f16] p-4 rounded-lg">
                  <pre className="text-sm text-gray-800 dark:text-gray-200 overflow-x-auto">{`const projects = [
  {
    id: 1,
    title: 'Your Project Name',
    description: 'Brief description of your project',
    tech: 'React, Node.js, MongoDB',
    image: 'https://your-image-url.com/image.jpg',
  },
  // Add more projects...
]`}</pre>
                </div>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                <h3 className="font-bold text-yellow-900 dark:text-yellow-300 mb-2">💡 Tips</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-yellow-800 dark:text-yellow-200">
                  <li>Use high-quality images (recommended: 800x450px)</li>
                  <li>Keep descriptions concise (2-3 sentences)</li>
                  <li>List key technologies used</li>
                  <li>Each project needs a unique ID</li>
                </ul>
              </div>
            </div>
          )}

          {/* Skills Tab */}
          {activeTab === 'skills' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Skills & Technologies
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Edit skills in the JSON preview below, then copy the config.
              </p>
              <div className="bg-gray-100 dark:bg-[#0a0f16] p-4 rounded-lg">
                <pre className="text-sm text-gray-800 dark:text-gray-200 overflow-x-auto">
                  {JSON.stringify(config.skills, null, 2)}
                </pre>
              </div>
            </div>
          )}

          {/* Experience Tab */}
          {activeTab === 'experience' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Work Experience
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Edit experience in the JSON preview below, then copy the config.
              </p>
              <div className="bg-gray-100 dark:bg-[#0a0f16] p-4 rounded-lg max-h-96 overflow-y-auto">
                <pre className="text-sm text-gray-800 dark:text-gray-200 overflow-x-auto">
                  {JSON.stringify(config.experience, null, 2)}
                </pre>
              </div>
            </div>
          )}
        </div>

        {/* Instructions */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mt-6">
          <h3 className="text-lg font-bold text-blue-900 dark:text-blue-300 mb-3">
            📝 How to Apply Changes
          </h3>
          <ol className="list-decimal list-inside space-y-2 text-blue-800 dark:text-blue-200">
            <li>Edit your content in the tabs above</li>
            <li>Click "📋 Copy Config" button</li>
            <li>Open <code className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">src/config/site.ts</code></li>
            <li>Replace the entire content with what you copied</li>
            <li>Save the file - changes will appear instantly!</li>
          </ol>
        </div>
      </div>

      {/* Photo Modal */}
      {showPhotoModal && config.profileImage && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setShowPhotoModal(false)}
        >
          <div 
            className="relative max-w-4xl max-h-[90vh] animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowPhotoModal(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors text-4xl font-bold"
              aria-label="Close modal"
            >
              ×
            </button>
            <img
              src={config.profileImage}
              alt="Profile"
              className="max-w-full max-h-[85vh] rounded-lg shadow-2xl object-contain"
            />
          </div>
        </div>
      )}

      {/* Welcome Meme Popup */}
      {showWelcome && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[60] flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setShowWelcome(false)}
        >
          <div 
            className="relative max-w-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowWelcome(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors text-4xl font-bold z-10"
            >
              ×
            </button>
            <img
              src="/meme.jpg"
              alt="Welcome"
              className="max-w-full rounded-lg shadow-2xl"
            />
            <p className="text-white text-center mt-4 text-xl font-bold">Welcome to Admin! 😄</p>
          </div>
        </div>
      )}
    </div>
  )
}
