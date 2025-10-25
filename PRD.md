PRD — Personal Website MVP (Showcasing Senior Software Engineering Ingenuity)
1) Project Overview

Build a fast, elegant, and slightly experimental personal website that demonstrates senior-level engineering craft, taste, and problem-solving. It should load instantly, be delightful to explore in 60–120 seconds, and reward deeper engagement with interactive demos, code patterns, and case studies. The tone: confident, practical, curiosity-driven.

Level: Easy → Medium (with optional experimental modules)
Type: Web Dev, Developer Experience, Interactive Demos
Primary KPI: Recruiter/peer conversion (portfolio views → contact/intro call)
Secondary KPIs: Time on site, demo interactions, resume downloads, GitHub clicks

2) Goals & Non-Goals
Goals

Communicate who I am, what I do, and how I think (clarity > volume).

Demonstrate real engineering ability via small but impressive, well-crafted demos.

Make it easy to contact me and evaluate my work in <2 minutes.

Be maintainable: simple content model, low hosting cost, trivial deploys.

Non-Goals (MVP)

No blog engine/CMS (can add later).

No complex auth, comments, or payments.

No heavy 3D scenes that hurt performance on mid devices.

3) Target Audience & Their Jobs-To-Be-Done

Hiring Managers/Recruiters (Primary)

Skim credibility fast → confirm fit → book a call.

Engineers/Peers (Secondary)

Assess code quality/thinking → explore demos → star/follow on GitHub.

Clients/Partners (Tertiary)

See case studies and delivery maturity → reach out with a brief.

How to make it most useful for them (answers one of your prompts):

Above-the-fold “who/what” with 3 proof points (impact, performance, open source).

Skimmable portfolio cards with metrics (e.g., “-47% p95 latency”, “+18% conversion”).

One-click “Contact” and “Download Resume (PDF)”.

Live demo tiles (runnable, with code) to signal hands-on ability.

Accessibility, lighthouse 95+, snappy interactions = “this person sweats the details”.

4) What is the website? (another of your prompts)

A single-owner personal site that acts as:

Intro/Value prop (hero)

Selected Work (3–6 case studies w/ metrics)

Live Demos (small, focused engineering artifacts)

About (principles, strengths, stack)

Contact (email, socials, calendly link optional)

Resume PDF (generated from the same source content)

5) How do I use the website? (your prompt)

Visitors land on a fast hero → read a crisp value prop + 3 badges (Impact | Perf | Systems).

Scroll reveals “Work” cards; each opens to a case study (problem → approach → result → snippet).

“Demos” section lets users run small examples (no page nav) and peek at source.

Floating CTA (Contact) follows on desktop/mobile.

Optional theme toggle and keyboard shortcuts (g → Work, d → Demos, c → Contact).

6) Patterns behind the website (your prompt)
Content Patterns

Problem → Constraints → Solution → Result (metric) for each case study.

Explain like an engineer: diagrams, trade-offs, brief “What I’d do differently v2”.

Single source of truth for resume + site: structured JSON/YAML → webpage & PDF.

Technical Patterns

Islands architecture (only hydrate interactive parts).

Progressive enhancement: site usable with JS off; demos gracefully degrade.

Performance first: image prefetching, font subsetting, HTTP/3, edge caching.

Accessibility: semantic HTML, color-contrast, focus rings, reduced motion.

Design Patterns

Strong typographic hierarchy, whitespace, and subtle micro-interactions.

Cards for work/demos; systemized tokens for colors/spacing/type.

7) Scope (MVP)
Pages/Sections

Home (hero + highlights + selected work + demos preview + contact CTA)

Work (grid of 3–6 projects; each with a detail route)

Demos (3 interactive tiles)

About (bio, values, skills, stack, speaking)

Contact (email/socials, optional calendly)

/resume.pdf (auto-generated)

MVP Features

Lighthouse ≥ 95 (Perf/Best/Access/SEO)

Static export + edge delivery

Dark/Light theme, system-pref aware

Basic analytics (privacy-friendly; e.g., Plausible)

Open Graph/Twitter cards for shareability

8) Experimental/Creative Elements (lightweight but impressive)

Pick 1–2 for MVP; keep the rest as backlog.

“Vibe Code” Playground
A mini editable code cell (no login) that runs TypeScript/JS snippets in a sandbox (Web Worker). Preloaded examples:

Debounce vs. Throttle visualizer

Event loop & microtasks timeline

Tiny WASM speed demo (e.g., image blur JS vs. WASM)

Generative Visual Header (perf-safe)
GPU shader (WebGL/WebGPU optional) or Canvas that draws a subtle motif influenced by your skills tags.

Interactive Resume
Toggle “Recruiter view” (impact bullets) vs “Engineer view” (architecture notes). Exports to a polished PDF.

Case Study Diff Viewer
Small before/after code diff with inline annotations and metrics.

Easter Egg Keyboard Nav
? opens command palette; jk cycles cards; little nod to vim users.

9) Information Architecture & Navigation

Top Nav: Work · Demos · About · Contact

Footer: Resume PDF · GitHub · LinkedIn · Email

Search/Command Palette (MVP-optional): fuzzy find across projects/demos.

10) User Stories & Acceptance Criteria

As a recruiter, I can learn who you are and why you’re relevant in ≤15s.

AC: Hero has role, domains, 3 proof badges; LCP < 1.5s on 4G.

As an engineer, I can run a small demo and view readable code.

AC: Demo runs client-side; “View Source” reveals a well-commented snippet in <300ms.

As any visitor, I can contact you quickly.

AC: Contact link visible above the fold on mobile/desktop; email link copies address or opens mail.

As a partner, I can assess real outcomes.

AC: Each case study lists quant metrics and tech stack; at least 3 projects.

11) Success Metrics (MVP)

Contact CTR: ≥ 3% of unique visitors click Contact/Email.

Time on site: median ≥ 90s; Demo Interaction Rate: ≥ 20%.

Resume downloads: ≥ 5% of unique visitors.

Perf: p75 LCP < 1.5s, TTI < 2.5s on mid-tier mobile.

12) Tech Stack & Architecture

Framework: Next.js or Astro (islands, fast static export).

Styling: Tailwind CSS + CSS variables (tokens).

Components: Headless UI/Radix for accessible primitives.

Demos: Client-only components, Web Worker for code execution; optional WASM module.

Content: Markdown/MDX for pages; data/*.yml for projects/resume.

Analytics: Plausible (no cookies).

Build/Deploy: Vercel/Netlify; PR previews.

Testing: Playwright (smoke + a11y), vitest for demo functions.

PDF Resume: Serverless function or build-time Puppeteer/Playwright render.

13) SEO/Perf/Accessibility Requirements

Descriptive titles/meta; JSON-LD Person + CreativeWork for projects.

Preload critical font subset (latin, weight 400/600 only); fallback stack ready.

Images: <img loading="lazy" decoding="async" srcset>; AVIF/WebP.

a11y: skip links, logical heading order, roles/labels, keyboard focus trap tested.

Respect prefers-reduced-motion and prefers-color-scheme.

14) Content Model (single source of truth)

data/profile.yml
data/projects.yml (title, summary, role, stack, metrics, links, cover)
data/demos.yml (id, name, description, code snippet, sandbox config)
Build step consumes these for pages + resume.pdf.

15) Analytics Events (minimal)

demo_run { demo_id }

work_open { project_id }

resume_download

contact_click { method: email|linkedin|github }

16) Security & Privacy

No contact forms (MVP) → mailto only (reduce attack surface).

CSP with strict default-src 'self', allowlist analytics domain.

No third-party fonts or heavy scripts; sanitize code snippets before run.

17) Milestones & Deliverables

Milestone 1 — Foundations (1–2 days)

Layout, theme, navigation, hero, Contact CTA.

Data model + 3 project cards (stub content).

Lighthouse ≥ 90s across the board.

Milestone 2 — Case Studies (1–2 days)

3 detailed project pages (metrics, diagrams, “what I learned”).

Resume PDF generation.

OG images per page.

Milestone 3 — Demos (2–3 days)

Vibe Code playground (1–2 mini demos).

View-source toggle + copy button.

Web Worker sandbox; fallback when JS off.

Milestone 4 — Polish (1 day)

Accessibility pass, keyboard shortcuts, micro-interactions.

Analytics wiring; final performance sweeps.

18) Risks & Mitigations

Demo complexity creeps → limit to 2 polished demos for MVP.

PDF generation flakiness → render at build time, not runtime.

Perf regressions → CI budget: fail build if LCP sim > 2s.

19) Open Questions

Which 3 projects best show range (systems, performance, product impact)?

Any constraints on brand colors/typography?

Include a short “Principles” section (e.g., “measure twice, ship daily”)?

Add Calendly link or keep email-only?

20) Appendix — Suggested Demo Ideas (pick 2 for MVP)

Latency Budget Explorer: slider for API hops; shows compounded p95.

Async Patterns Visualizer: compare debounce/throttle/rAF with live timeline.

WASM vs JS Micro-bench: 1 tiny image filter with time/ops summary.

TL;DR Answers to Your 4 Questions

What is the website? A fast personal portfolio that proves senior engineering skill via concise storytelling and small, high-quality interactive demos.

How do I use the website? Land → skim hero → open a case study or run a demo → contact/download resume.

Patterns behind it? Problem→Solution→Result content pattern; islands architecture; performance, accessibility, and DX-forward design patterns.

How to make it most useful? Skimmable proof (metrics), runnable demos, frictionless contact, strong SEO/perf/a11y, and a clean, credible aesthetic.