# Pro Website - Professional Apparel Manufacturing

A professional Next.js website showcasing apparel manufacturing services and processes.

## Features

### Main Landing Page
- **Header**: Sticky navigation with logo, menu items, language selector, and contact button
- **Hero Section**: Full-width background with headline, description, and CTA buttons
- **Services Section**: Three-image grid showcasing manufacturing capabilities
- **Our Collection**: Product showcase with download and view buttons
- **Testimonials**: Auto-scrolling client testimonials
- **Blog Section**: Horizontal scrolling blog posts
- **Catalogue Download**: Blue banner for catalogue download
- **Footer**: Company info, navigation, contact details, and newsletter signup

### Process Page (`/process`)
- **Process Hero**: Background image with "Our Process" title and description
- **Spinning Section**: Text content + 2x2 image grid (sp1.png, sp2.png, sp3.png, sp4.png)
- **Knitting Section**: 2x2 image grid + text content (k1.png, k2.png, k3.png, k4.png)
- **Dyeing Section**: Text content + 2x2 image grid (d1.png, d2.png, d3.png, d4.png)
- **Manufacturing Section**: 2x3 image grid + text content (m1.png, m2.png, m3.png, m4.png, m5.png)

## Required Images

### Main Page Images
- `bghero.png` - Hero background
- `logo.png` - Company logo
- `image1.png`, `image2.png`, `image3.png` - Services section images
- `brand1.png` through `brand7.png` - Brand logos

### Process Page Images
- `processbg.png` - Process page hero background
- `sp1.png`, `sp2.png`, `sp3.png`, `sp4.png` - Spinning process images
- `k1.png`, `k2.png`, `k3.png`, `k4.png` - Knitting process images
- `d1.png`, `d2.png`, `d3.png`, `d4.png` - Dyeing process images
- `m1.png`, `m2.png`, `m3.png`, `m4.png`, `m5.png` - Manufacturing process images

## Tech Stack

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **next/image** for image optimization
- **Responsive design** for mobile, tablet, and desktop

## Installation

1. Clone the repository
2. Install dependencies: `npm install`
3. Place all required images in the `public/` folder
4. Run development server: `npm run dev`

## Navigation

- **Home** (`/`) - Main landing page
- **Processes** (`/process`) - Detailed manufacturing process page
- **Services** (`#services`) - Services section on main page
- **Collections** (`#collections`) - Product collections section
- **Blog** (`#blog`) - Blog posts section

## Components Structure

- `Header.tsx` - Navigation header
- `HeroSection.tsx` - Main hero section
- `ServicesSection.tsx` - Three-image services grid
- `OurCollection.tsx` - Product showcase
- `Testimonials.tsx` - Client testimonials
- `BlogSection.tsx` - Blog posts scroller
- `DownloadSection.tsx` - Catalogue download banner
- `Footer.tsx` - Site footer
- `ProcessHero.tsx` - Process page hero
- `SpinningSection.tsx` - Spinning process details
- `KnittingSection.tsx` - Knitting process details
- `DyeingSection.tsx` - Dyeing process details
- `ManufacturingSection.tsx` - Manufacturing process details

## Responsive Design

- **Mobile**: Stacked layouts, smaller fonts, centered text
- **Tablet**: 2-column layouts where possible
- **Desktop**: Full design implementation with hover effects

## Performance Features

- Image optimization with `next/image`
- Semantic HTML for accessibility
- Smooth scrolling and animations
- Optimized Tailwind CSS classes 