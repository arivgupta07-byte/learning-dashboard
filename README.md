# Learning Dashboard

A modern student learning dashboard built using Next.js, TypeScript, Tailwind CSS, Supabase, Lucide React, and Framer Motion.

## Features

* Course progress tracking
* Supabase database integration
* Responsive dashboard layout
* Lucide React icons
* Framer Motion animations
* Loading and error states
* Vercel deployment

## Tech Stack

* Next.js 16
* TypeScript
* Tailwind CSS
* Supabase
* Lucide React
* Framer Motion
* Vercel

## Project Structure

```text
app/
├── page.tsx
├── layout.tsx
├── loading.tsx

components/
├── Sidebar.tsx
├── HeroTile.tsx
├── CourseCard.tsx
├── ActivityTile.tsx

lib/
└── supabase.ts
```

## Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Local Setup

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Build production version:

```bash
npm run build
```

## Live Demo

https://learning-dashboard-gray.vercel.app

## GitHub Repository

https://github.com/arivgupta07-byte/learning-dashboard

## Author

Ariv Gupta
