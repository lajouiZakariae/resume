# Copilot Instructions for Resume Website

## Project Overview

This is a modern TypeScript Next.js resume website built with App Router. The project follows a **data-driven architecture** where ALL content comes from a single source of truth: [`data/resume.json`](data/resume.json). The site is optimized for both web viewing and print/PDF generation.

## Architecture & Data Flow

### Single Source of Truth Pattern

- **All data** is stored in [`data/resume.json`](data/resume.json) and accessed via `getResumeData()` from [`lib/index.ts`](lib/index.ts)
- Never hardcode personal information - always pull from the JSON data
- Example: `const { name, role, workExperience } = getResumeData();`

### Component Structure

- Page sections are organized under [`components/sections/`](components/sections/)
- Main layout in [`app/page.tsx`](app/page.tsx) imports and renders section components
- Each section component follows this pattern:
  ```tsx
  import { getResumeData } from "@/lib";
  const { sectionData } = getResumeData();
  export default function SectionName() {
    /* render logic */
  }
  ```

## Styling Architecture

### Hybrid CSS Approach

- **Tailwind CSS**: Used minimally, mainly through `@import "tailwindcss"` in [`globals.css`](app/globals.css)
- **Custom CSS**: Primary styling uses BEM methodology with CSS custom properties
- **CSS Variables**: Defined in `:root` for consistent theming (colors, spacing, typography)

### Print-First Design

- **Critical**: All styles must work for both screen AND print media
- Print styles in [`globals.css`](app/globals.css) handle PDF generation requirements
- Use `page-break-inside: avoid` for keeping sections intact
- Test changes in browser print preview

### BEM CSS Classes

Follow existing BEM patterns:

```css
.resume-section              /* Block */
.resume-section__heading     /* Element */
.resume-section--compact     /* Modifier */
```

## Development Patterns

### TypeScript Configuration

- Uses strict mode with path aliases (`@/*` points to root)
- JSON imports enabled (`resolveJsonModule: true`)
- Next.js App Router with React 19+ JSX transform

### Component Patterns

1. Always destructure needed data at component top
2. Use semantic HTML elements (`<section>`, `<article>`, `<header>`)
3. Apply BEM CSS classes consistently
4. Map over arrays from JSON data (don't hardcode lists)

### File Organization

```
app/                    # Next.js App Router pages
├── layout.tsx         # Root layout with metadata derived from resume data
├── page.tsx          # Main resume page importing all sections
└── globals.css       # All custom styles with print optimization

components/sections/   # Resume section components
data/resume.json      # Single source of truth for all content
lib/index.ts         # Data access and utility functions
```

## Key Commands

```bash
npm run dev          # Start development server on localhost:3000
npm run build        # Production build
npm run lint         # ESLint with Next.js config
```

## Critical Conventions

### When Adding New Sections

1. Add data structure to `resume.json`
2. Create component in `components/sections/`
3. Import and render in `app/page.tsx`
4. Style with BEM classes in `globals.css`

### When Modifying Data

- Edit ONLY `data/resume.json` - never hardcode content in components
- Update TypeScript types if adding new data structures
- Test both web and print layouts after changes

### Print Optimization Rules

- Use CSS custom properties for consistent sizing
- Avoid Tailwind classes that might break print layouts
- Test all changes in browser print preview (Ctrl/Cmd + P)
- Keep related content together with `page-break-inside: avoid`

## External Dependencies

- **Next.js 16**: Modern App Router with Server Components
- **React 19**: Latest features enabled
- **TypeScript 5**: Strict mode configuration
- **Tailwind CSS 4**: Minimal usage, prefer custom CSS
- **ESLint**: Next.js recommended rules + TypeScript support

## Common Tasks

- **Update resume content**: Edit [`data/resume.json`](data/resume.json)
- **Add new section**: Follow the data-first pattern (JSON → Component → Styles → Page import)
- **Modify layout**: Check [`app/page.tsx`](app/page.tsx) section ordering
- **Style changes**: Edit [`globals.css`](app/globals.css) with print media considerations
