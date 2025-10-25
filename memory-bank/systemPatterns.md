# System Patterns

## Architecture Overview
Next.js 14 App Router application with TypeScript, Tailwind CSS, and centralized configuration system.

## Key Technical Decisions

### Framework & Build
- **Next.js 14**: Modern React framework with App Router
- **TypeScript**: Type safety and better developer experience
- **Static Export**: `output: 'export'` for deployment to any static host
- **Dynamic Routes**: Using `generateStaticParams` for pre-rendering

### Styling System
- **Tailwind CSS**: Utility-first CSS framework
- **Custom Animations**: Keyframe animations in globals.css
- **Dark Mode**: Class-based with next-themes package
- **Glassmorphism**: Backdrop-blur effects for modern UI
- **Gradients**: Used for text, backgrounds, and accents

### Configuration Architecture
```typescript
// Centralized in src/config/site.ts
export const siteConfig = {
  name, title, tagline,
  bio, stats, contact,
  social, skills, experience,
  education, interests, seo
}
```

All components import and use `siteConfig` for content.

## File Structure
```
src/
  app/
    layout.tsx              # Root layout with theme provider
    page.tsx                # Home page
    about/page.tsx          # About page
    projects/page.tsx       # Projects listing
    contact/page.tsx        # Contact page
    work/[id]/page.tsx      # Dynamic project details
    globals.css             # Global styles & animations
  components/
    navigation.tsx          # Sticky header with glassmorphism
    hero.tsx                # Hero section with animations
    work-preview.tsx        # Project cards
    theme-toggle.tsx        # Dark/light mode toggle
  config/
    site.ts                 # Centralized configuration
  lib/
    utils.ts                # Utility functions
```

## Component Patterns

### Server vs Client Components
- **Server Components** (default): Static pages, layouts
- **Client Components** ('use client'): Navigation, theme toggle, interactive elements

### Configuration Pattern
```typescript
import { siteConfig } from '@/config/site'

// Use in component
<h1>{siteConfig.name}</h1>
<p>{siteConfig.bio}</p>
```

### Animation Pattern
```tsx
// Staggered entrance animations
<div className="animate-fade-in-up stagger-1">
<div className="animate-fade-in-up stagger-2">
```

### Hover Effects Pattern
```tsx
className="hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
```

## Design System Patterns

### Color Usage
- **Primary (#1173d4)**: CTAs, links, accents
- **Green (#10b981)**: Status indicators (available)
- **Gradients**: Visual interest, text effects
- **Gray Scale**: Text hierarchy, borders

### Typography Scale
- **Hero**: text-4xl to text-7xl (responsive)
- **Headings**: text-3xl to text-5xl
- **Body**: text-base to text-xl
- **Small**: text-sm to text-xs

### Spacing System
- **Sections**: py-16, py-20, py-32
- **Cards**: p-4, p-6
- **Gaps**: gap-4, gap-6, gap-8

### Animation Timing
- **Fast**: 150ms (micro-interactions)
- **Normal**: 300ms (standard transitions)
- **Slow**: 500-700ms (complex animations)
- **Stagger**: 0.1s, 0.2s, 0.3s delays

## Critical Implementation Paths

### Page Rendering Flow
```
App Router → RootLayout (theme provider) → Page Component → Components
```

### Theme Switching Flow
```
ThemeToggle → useTheme hook → next-themes → HTML class → CSS variables
```

### Navigation Flow
```
Navigation (client) → usePathname → active state → Link components
```

### Configuration Flow
```
siteConfig → Component import → Render data → User sees content
```

### Dynamic Routes Flow
```
generateStaticParams → Build time → Static HTML → Fast loading
```

## State Management
- **Theme**: next-themes (localStorage + system preference)
- **Navigation**: usePathname hook for active states
- **No global state**: Props and config for data flow

## Performance Optimizations
- Static generation for all pages
- CSS animations (GPU-accelerated)
- Minimal client-side JavaScript
- Image optimization with aspect-ratio
- Backdrop-filter for glassmorphism
- Lazy loading for off-screen content

## Accessibility Patterns
- Semantic HTML elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus states on all interactive elements
- Color contrast ratios met
- Responsive text sizing

## Deployment Pattern
```bash
npm run build  # Generates static site in /out
# Deploy /out folder to any static host
# (Vercel, Netlify, GitHub Pages, etc.)
```

## Key Conventions
1. **File naming**: kebab-case for files, PascalCase for components
2. **Imports**: Use `@/` alias for src directory
3. **Styling**: Tailwind classes, no custom CSS except animations
4. **Types**: TypeScript for all components
5. **Config**: Single source of truth in `site.ts`

## Component Relationships