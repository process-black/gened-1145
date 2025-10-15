# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development Commands

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build the application for production with Turbopack
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

### Package Management

This project uses pnpm exclusively. Always use pnpm for package management and running scripts.

## Project Architecture

This is a Next.js 15 application using the App Router pattern with the following key characteristics:

### Technology Stack

- **Framework**: Next.js 15.5.4 with App Router
- **Runtime**: React 19.1.0
- **Styling**: Tailwind CSS v4 with shadcn/ui components
- **UI Components**: shadcn/ui with class-variance-authority, clsx, tailwind-merge
- **Interactive Components**: React Bits components with WebGL effects (via OGL)
- **Icons**: Lucide React
- **Theming**: next-themes for dark/light mode switching
- **Animations**: tw-animate-css for enhanced Tailwind animations
- **TypeScript**: Configured with strict mode and path aliasing (`@/*` → `./src/*`)
- **Build Tool**: Turbopack (used in both dev and build commands)
- **Fonts**: Inter (primary) and Geist Mono (monospace) via `next/font/google`

### Directory Structure

- `src/app/` - App Router pages and layouts
  - `layout.tsx` - Root layout with font configuration, theme provider, and global styles
  - `page.tsx` - Home page component
  - `globals.css` - Global styles with Tailwind CSS and shadcn/ui theme variables
  - `favicon.ico` - Site favicon
- `src/components/` - Reusable components
  - `ui/` - shadcn/ui components (kebab-case naming for CLI compatibility)
    - `button.tsx`, `dropdown-menu.tsx` - shadcn/ui primitives
  - `reactbits/` - React Bits components (PascalCase naming)
    - `PrismaticBurst.tsx` - WebGL background effects
  - `theme-provider.tsx` - Theme context provider
  - `mode-toggle.tsx` - Dark/light mode toggle component
- `_context/how-to/` - Development documentation and guides
- Root level configuration files for Next.js, TypeScript, ESLint, PostCSS

### Key Architectural Patterns

- **App Router**: Uses Next.js App Router (not Pages Router)
- **Font Optimization**: Inter and Geist Mono loaded via `next/font/google` with CSS variables
- **Design System**: shadcn/ui components with comprehensive CSS custom properties theme
- **Theme Management**: next-themes provider with automatic dark/light mode detection
- **Interactive Effects**: React Bits components for advanced animations and WebGL effects
- **Path Aliasing**: `@/*` imports resolve to `src/*`
- **Modern Tailwind**: Uses Tailwind CSS v4 with inline theme configuration

### Styling Approach

- Tailwind CSS v4 with `@theme inline` configuration in globals.css
- shadcn/ui design system with extensive CSS custom properties for theming
- Comprehensive color palette including sidebar, chart, and component-specific variables
- Dark mode support via next-themes with `.dark` class and CSS custom properties
- Font variables: `--font-inter` (primary) and `--font-geist-mono` (monospace)
- Enhanced animations via tw-animate-css package
- Utility libraries: `class-variance-authority` for component variants, `clsx` and `tailwind-merge` for conditional classes

## React Bits Integration

### Component Organization
- React Bits components are placed in `src/components/reactbits/`
- Use PascalCase naming to match exported component names and support IDE auto-imports
- Always add `'use client'` directive for components using hooks or WebGL
- Follow the integration guide in `_context/how-to/add-reactbits.md`

### Naming Conventions
- **shadcn/ui components**: kebab-case (e.g., `dropdown-menu.tsx`) for CLI compatibility
- **React Bits components**: PascalCase (e.g., `PrismaticBurst.tsx`) for clean imports
- **Custom components**: PascalCase for consistency

### WebGL Components
- Require `ogl` dependency for WebGL functionality
- Must be client-side rendered (`'use client'` directive)
- Test performance on mobile devices
- Consider lazy loading for heavy animation components

## Theming System

### Theme Provider Setup
- Uses next-themes for automatic theme detection and switching
- Theme provider wraps the entire app in layout.tsx
- Mode toggle component provides manual theme switching
- Supports system preference detection

### CSS Custom Properties
- Comprehensive theming via CSS custom properties in globals.css
- Automatic dark/light mode switching via `.dark` class
- Colors include: background, foreground, primary, secondary, accent, destructive
- Extended palette: sidebar, chart, border, input, ring variables

### Configuration Notes

- ESLint extends Next.js core-web-vitals and TypeScript rules
- TypeScript configured with bundler module resolution
- Next.js config is minimal with default settings
- All components should follow the established theming pattern with CSS custom properties
- WebGL components require client-side rendering and proper error handling