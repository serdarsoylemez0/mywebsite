# Active Context

## Current Focus
Portfolio website is complete with professional design enhancements and centralized configuration system.

## Recent Changes (Latest Session)
- ✅ Created centralized configuration system (`src/config/site.ts`)
- ✅ Enhanced all components to use config data
- ✅ Applied professional design patterns across all pages
- ✅ Added modern animations and transitions (fade-in-up, stagger, hover effects)
- ✅ Implemented glassmorphism navigation with sticky header and active states
- ✅ Enhanced hero section with gradient backgrounds and animated badges
- ✅ Redesigned project cards with hover effects and tech stack tags
- ✅ Improved About page with profile photo effects and social buttons
- ✅ Added green availability badge with glow effects and emoji
- ✅ Enhanced logo/brand with rotation animation, glow, and subtitle
- ✅ Made contact cards fully interactive (clickable links)
- ✅ Added copy-to-clipboard functionality for email
- ✅ Updated memory bank documentation

## Completed Features
1. ✅ Home page with hero and project preview
2. ✅ About page with profile, skills, experience, education
3. ✅ Projects page with project grid
4. ✅ Contact page with form and social links
5. ✅ Project detail pages (dynamic routes)
6. ✅ Dark/light theme toggle
7. ✅ Responsive navigation
8. ✅ Centralized site configuration
9. ✅ Professional animations and transitions
10. ✅ Modern UI/UX design patterns

## Active Decisions
- **Framework**: Next.js 14 App Router with TypeScript
- **Styling**: Tailwind CSS with custom animations in globals.css
- **Configuration**: Centralized in `src/config/site.ts` for easy updates
- **Content**: All personal data from siteConfig object
- **Deployment**: Static export (`output: 'export'`) for any static host
- **Design**: Professional UI/UX with gradients, animations, glassmorphism
- **Colors**: Primary (#1173d4), Green for status, gradients for accents
- **Interactions**: Hover effects, smooth transitions, copy-to-clipboard

## Important Patterns
- **Configuration**: All content from `siteConfig` - single source of truth
- **Animations**: `animate-fade-in-up`, `stagger-1/2/3` for sequential reveals
- **Hover Effects**: `hover:shadow-xl hover:-translate-y-2 transition-all duration-300`
- **Color Scheme**: Green (#10b981) for availability, Primary (#1173d4) for CTAs
- **Spacing**: py-20/py-32 for sections, consistent gap-4/6/8
- **Typography**: Responsive text sizes (4xl-7xl for hero, 3xl-5xl for headings)
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation
- **Performance**: CSS animations (GPU-accelerated), minimal JS

## Learnings & Insights
- **Centralized config** makes updates incredibly easy - change once, updates everywhere
- **Green availability badge** is more welcoming than blue (positive psychology)
- **Copy-to-clipboard** is essential for email - not everyone has email client configured
- **Staggered animations** create professional, polished feel
- **Glassmorphism navigation** adds modern premium look
- **Two-button approach** (mailto + copy) covers all user scenarios
- **Memory bank** provides perfect continuity across sessions
- **User customization** was key - made it their own with real data