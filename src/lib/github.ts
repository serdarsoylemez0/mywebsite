export interface GitHubRepo {
  id: number
  name: string
  full_name: string
  description: string | null
  html_url: string
  homepage: string | null
  topics: string[]
  language: string | null
  stargazers_count: number
  forks_count: number
  fork: boolean
  created_at: string
  updated_at: string
  pushed_at: string
}

export interface Project {
  id: string
  title: string
  description: string
  tech: string
  image: string
  url: string
  stars: number
  language: string | null
}

const GITHUB_USERNAME = 'serdarsoylemez0'

export async function fetchGitHubRepos(): Promise<Project[]> {
  try {
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`,
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
        },
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    )

    if (!response.ok) {
      console.error('GitHub API error:', response.status, response.statusText)
      throw new Error(`Failed to fetch GitHub repos: ${response.status}`)
    }

    const repos: GitHubRepo[] = await response.json()
    console.log('Fetched repos count:', repos.length)

    // Filter out forks and profile README repo
    const filteredRepos = repos
      .filter(repo => !repo.fork && repo.name.toLowerCase() !== GITHUB_USERNAME.toLowerCase())
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, 6) // Get top 6 repos

    console.log('Filtered repos count:', filteredRepos.length)

    // If no repos found, return fallback
    if (filteredRepos.length === 0) {
      return getFallbackProjects()
    }

    // Transform to Project format
    return filteredRepos.map(repo => ({
      id: repo.name,
      title: formatRepoName(repo.name),
      description: repo.description || 'A GitHub repository by ' + GITHUB_USERNAME,
      tech: formatTech(repo.topics, repo.language),
      image: generateRepoImage(repo.language),
      url: repo.html_url,
      stars: repo.stargazers_count,
      language: repo.language,
    }))
  } catch (error) {
    console.error('Error fetching GitHub repos:', error)
    return getFallbackProjects()
  }
}

function getFallbackProjects(): Project[] {
  return [
    {
      id: 'mywebsite',
      title: 'My Website',
      description: 'Personal portfolio website built with Next.js and TypeScript',
      tech: 'TypeScript, Next.js, Tailwind CSS',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=450&fit=crop',
      url: `https://github.com/${GITHUB_USERNAME}`,
      stars: 0,
      language: 'TypeScript',
    },
  ]
}

function formatRepoName(name: string): string {
  return name
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

function formatTech(topics: string[], language: string | null): string {
  const techs = [...topics.slice(0, 3)]
  if (language && !techs.includes(language.toLowerCase())) {
    techs.unshift(language)
  }
  return techs.slice(0, 4).join(', ') || language || 'Various'
}

function generateRepoImage(language: string | null): string {
  // Map languages to relevant Unsplash images
  const imageMap: Record<string, string> = {
    'TypeScript': 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=450&fit=crop',
    'JavaScript': 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&h=450&fit=crop',
    'Python': 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&h=450&fit=crop',
    'Java': 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=450&fit=crop',
    'C++': 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&h=450&fit=crop',
    'C': 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&h=450&fit=crop',
    'Go': 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=800&h=450&fit=crop',
    'Rust': 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=450&fit=crop',
    'HTML': 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&h=450&fit=crop',
    'CSS': 'https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?w=800&h=450&fit=crop',
  }

  return imageMap[language || ''] || 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=450&fit=crop'
}
