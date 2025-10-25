# Website Setup Guide

Welcome! This guide will help you customize your portfolio website.

## Quick Setup

All your personal information is stored in one file: `src/config/site.ts`

### Step 1: Update Personal Information

Open `src/config/site.ts` and update the following:

```typescript
name: 'Serdar Soylemez',
title: 'Software Engineer',
tagline: 'I design and build beautiful, fast, and accessible web experiences for everyone.',
```

### Step 2: Update Contact Information

```typescript
contact: {
  email: 'serdarsoylemez@protonmail.com',
  phone: '+1 (555) 123-4567', // Optional
  location: 'Istanbul, Turkey', // Optional
},
```

### Step 3: Update Social Links

```typescript
social: {
  github: 'https://github.com/serdarsoylemez0',
  linkedin: 'https://linkedin.com/in/serdarsoylemez',
  website: 'https://serdarsoylemez.com',
},
```

### Step 4: Update Profile Image

Replace the URL with your own profile photo:

```typescript
profileImage: 'https://your-image-url.com/photo.jpg',
```

**Tip**: You can use:
- Your own hosted image
- Gravatar
- LinkedIn profile photo
- GitHub avatar

### Step 5: Update Your Bio

```typescript
bio: "Write your professional bio here. Talk about your experience, philosophy, and what drives you as an engineer.",
```

### Step 6: Update Stats

```typescript
stats: {
  experience: '4+', // Years of experience
  projects: '10+',   // Projects completed
  teamLead: '2+',    // Years as team lead
},
```

### Step 7: Update Skills

Add or remove skills as needed:

```typescript
skills: [
  { name: 'JavaScript', icon: '💻' },
  { name: 'Your Skill', icon: '🚀' },
  // Add more skills...
],
```

### Step 8: Update Experience

```typescript
experience: [
  {
    period: '2020 - Present',
    title: 'Your Job Title',
    company: 'Company Name',
    description: 'What you did and achieved.',
  },
  // Add more positions...
],
```

### Step 9: Update Education

```typescript
education: {
  degree: 'Bachelor of Science in Software Engineering',
  school: 'Maltepe University',
  period: '2022 - 2026',
},
```

### Step 10: Update Interests

```typescript
interests: ['Tech', 'Tenis', 'Open-Source', 'Photography'],
```

## Advanced Customization

### Adding Projects

Edit `src/app/work/[id]/page.tsx` to add your own projects:

```typescript
const projectData: Record<string, any> = {
  'your-project-slug': {
    title: 'Project Name',
    subtitle: 'Short description',
    image: 'project-image-url.jpg',
    problem: 'What problem did it solve?',
    constraints: 'What were the challenges?',
    solution: 'How did you solve it?',
    results: 'What were the outcomes?',
    techStack: ['Tech1', 'Tech2', 'Tech3'],
  },
}
```

Don't forget to add the slug to `generateStaticParams()`:

```typescript
export function generateStaticParams() {
  return [
    { id: 'your-project-slug' },
    // Add more project IDs...
  ]
}
```

### Updating Home Page Projects

Edit `src/components/work-preview.tsx` to update the project preview cards.

### Changing Colors

Edit `tailwind.config.ts` to change the primary color:

```typescript
colors: {
  primary: '#1173d4', // Change this hex color
}
```

## Testing Your Changes

1. Save all files
2. The dev server will automatically reload
3. Check `http://localhost:3001` to see your changes

## Need Help?

- All configuration is in `src/config/site.ts`
- Projects are in `src/app/work/[id]/page.tsx`
- Styling is in `tailwind.config.ts`

## Deployment

When ready to deploy:

```bash
npm run build
```

This will create an `out` folder with your static website ready to deploy to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

---

**Pro Tip**: Start by updating `src/config/site.ts` first - it controls most of the content across all pages!
