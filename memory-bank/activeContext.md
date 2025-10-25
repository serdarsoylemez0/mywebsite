# Active Context

## Current Focus
Portfolio website with functional contact form using EmailJS integration.

## Recent Changes (Latest Session - Oct 25, 2025)
- ✅ Implemented EmailJS contact form functionality
- ✅ Installed @emailjs/browser SDK
- ✅ Added form state management with React hooks (useState, useRef)
- ✅ Implemented async email sending with loading states
- ✅ Added form validation (required fields, email format, min length)
- ✅ Created success/error feedback messages with styled alerts
- ✅ Added disabled states during form submission
- ✅ Implemented form reset after successful submission
- ✅ Created .env.local configuration for EmailJS credentials
- ✅ Added console logging for debugging
- ✅ Created EMAILJS_SETUP.md and CONTACT_FORM_DEBUG.md guides
- ✅ Updated site tagline from "web experiences" to "software"
- ✅ Dev server running on port 3002 with environment variables loaded

## Completed Features
1. ✅ Home page with hero and project preview
2. ✅ About page with profile, skills, experience, education
3. ✅ Projects page with project grid
4. ✅ Contact page with functional EmailJS form
5. ✅ Project detail pages (dynamic routes)
6. ✅ Dark/light theme toggle
7. ✅ Responsive navigation
8. ✅ Centralized site configuration
9. ✅ Professional animations and transitions
10. ✅ Modern UI/UX design patterns
11. ✅ Email integration with EmailJS (client-side)
12. ✅ Form validation and user feedback

## Active Decisions
- **Framework**: Next.js 14 App Router with TypeScript
- **Styling**: Tailwind CSS with custom animations in globals.css
- **Configuration**: Centralized in `src/config/site.ts` for easy updates
- **Content**: All personal data from siteConfig object
- **Deployment**: Static export (`output: 'export'`) for any static host
- **Design**: Professional UI/UX with gradients, animations, glassmorphism
- **Colors**: Primary (#1173d4), Green for status, gradients for accents
- **Interactions**: Hover effects, smooth transitions, copy-to-clipboard
- **Email Service**: EmailJS for client-side email sending (no backend needed)
- **Environment**: .env.local for EmailJS credentials (gitignored)

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
- **EmailJS** perfect for static sites - no backend needed, free tier sufficient
- **Environment variables** must be prefixed with NEXT_PUBLIC_ for client-side access
- **Dev server restart** required after creating/updating .env.local
- **Template field names** in EmailJS must match form field names exactly
- **Console logging** crucial for debugging EmailJS integration issues