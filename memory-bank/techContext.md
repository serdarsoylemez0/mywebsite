# Technical Context

## Technologies Used
- **Framework**: Next.js 14+ (App Router, React Server Components)
- **Language**: TypeScript 5+
- **Styling**: Tailwind CSS 3+ with CSS variables
- **Components**: Radix UI (headless, accessible primitives)
- **Icons**: Lucide React
- **Fonts**: Inter (variable font, subset)
- **Email Service**: EmailJS (@emailjs/browser) - client-side email sending
- **Code Highlighting**: Shiki or Prism
- **Analytics**: Plausible (privacy-friendly, no cookies)
- **PDF Generation**: Puppeteer or Playwright (build-time)

## Development Setup
```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Run tests
npm test

# Generate PDF resume
npm run generate-resume
```

## Environment Configuration
```bash
# Create .env.local for EmailJS credentials
# Required variables (get from https://emailjs.com):
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key

# Note: NEXT_PUBLIC_ prefix required for client-side access
# Restart dev server after creating/updating .env.local
```

## Key Technical Constraints
- Static export mode (`output: 'export'` in next.config.js)
- Client-side email sending (no backend API routes)
- Environment variables must use NEXT_PUBLIC_ prefix
- EmailJS template field names must match form field names