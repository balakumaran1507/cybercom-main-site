# Codebase Overview: Cybercom Main Site

This document provides a comprehensive overview of the `cybercom-main-site` project, detailing its architecture, tech stack, key components, and project structure.

---

## 🚀 Overview

The **Cybercom Main Site** is a high-performance, visually polished landing page for Cybercom, a product development system tailored for teams and AI agents. It's built as a modern Next.js application, emphasizing a dark, minimal aesthetic with sophisticated interactive elements.

## 🛠️ Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **UI Components:** [Radix UI](https://www.radix-ui.com/) (Primitives like Slot)
- **Utilities:** `clsx`, `tailwind-merge`
- **Language:** [TypeScript](https://www.typescriptlang.org/)

## 📂 Project Structure

```text
cybercom-main-site/
├── src/
│   ├── app/                    # Next.js App Router directory
│   │   ├── favicon.ico
│   │   ├── globals.css         # Global styles and Tailwind configuration
│   │   ├── layout.tsx          # Root layout with basic structure/metadata
│   │   └── page.tsx            # Main landing page (Home)
│   ├── components/             # Reusable React components
│   │   ├── InteractiveDemo.tsx # Animated project management simulator (Unused in Home)
│   │   └── Navbar.tsx          # Sophisticated navigation with dropdowns
│   └── lib/                    # Shared utility functions
│       └── utils.ts            # Tailwind class merging utility (cn)
├── public/                     # Static assets (SVGs, images)
├── next.config.ts              # Next.js configuration
├── package.json                # Project dependencies and scripts
├── postcss.config.mjs          # PostCSS configuration
├── tsconfig.json               # TypeScript configuration
└── eslint.config.mjs           # ESLint configuration
```

## 🧩 Key Components

### 1. **Navbar (`src/components/Navbar.tsx`)**
- A sticky, glassmorphism-style navigation bar.
- Features a sophisticated "Product" dropdown that reveals categories (Intake, Plan, Build, etc.) with detailed descriptions.
- Uses a `timeoutRef` to handle smooth entry/exit of the dropdown on hover.
- Includes a "New" badge and links to "Changelog".

### 2. **InteractiveDemo (`src/components/InteractiveDemo.tsx`)**
- An advanced animated component built with **Framer Motion** and **Lucide**.
- Simulates an AI agent working on a software engineering task (`ENG-2703`).
- **States:**
  - **Todo:** Initial task state.
  - **In Progress:** AI (@Cursor) starts working, showing an animated "Analyzing codebase..." log.
  - **Done:** Pull request merged seamlessly with performance metrics.
- *Note: This component is currently implemented but not integrated into the main `Home` page.*

### 3. **Home Page (`src/app/page.tsx`)**
- The primary landing interface.
- Includes a high-impact hero section with a bold headline and sub-description.
- Features a "Cybercom Diffs (Beta)" call-to-action.
- Displays a partial application mockup container at the bottom, showcasing a tabbed interface and a "Quick Search/Command Bar" (⌘K).

## 🎨 Styling and Theme

The project uses a custom theme defined in `src/app/globals.css` with the following palette:
- **Background:** `#08090a` (Deep dark)
- **Foreground:** `#f7f8f8` (Off-white)
- **Secondary Text:** `#8a8f98` (Muted grey)
- **Border Subtle:** `#222324`
- **Font:** Inter (Sans-serif)

## 🛠️ Development Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the production application.
- `npm run start`: Starts the production server.
- `npm run lint`: Runs ESLint for code quality checks.

---
*Last updated: March 2026*
