# 🎨 Modern Portfolio Website

A stunning, dark-themed portfolio website built with React and Tailwind CSS, inspired by professional portfolio designs with a focus on premium aesthetics and smooth animations.

## ✨ Features

- **🌙 Dark Theme** - Deep navy/black background with vibrant yellow accents
- **💎 Glassmorphism Design** - Modern card designs with backdrop blur effects
- **🎭 Smooth Animations** - Powered by Framer Motion for buttery smooth interactions
- **📱 Fully Responsive** - Perfect layout on all devices (desktop, tablet, mobile)
- **🎯 Two-Column Layout** - Fixed sidebar + scrollable content area
- **🧭 Sticky Navigation** - Smart navbar that tracks active section
- **⚡ Performance Optimized** - Built with Vite for lightning-fast load times

## 🎨 Sections

1. **About** - Introduction with highlight cards showcasing key strengths
2. **Academics** - Vertical timeline of educational journey
3. **Tech Stack** - Grid of technologies with hover effects
4. **LeetCode Progress** - Circular progress visualization with stats breakdown
5. **Projects** - Featured project cards with expandable details
6. **Resume** - Download CTA section
7. **Contact** - Contact form with validation

## 🚀 Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Smooth Scrolling**: React Scroll

## 📦 Installation

\`\`\`bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
\`\`\`

## 🎯 Project Structure

\`\`\`
src/
├── components/
│   ├── Sidebar.jsx          # Fixed profile sidebar
│   └── Navbar.jsx            # Sticky navigation
├── layouts/
│   └── MainLayout.jsx        # Main 2-column layout
├── sections/
│   ├── LeetCodeSection.jsx   # LeetCode progress
│   └── ResumeSection.jsx     # Resume download
├── App.jsx                   # Main app with all sections
├── main.jsx                  # Entry point
└── index.css                 # Global styles & theme
\`\`\`

## 🎨 Customization

### Colors
Update theme colors in `src/index.css`:
\`\`\`css
@layer theme {
  :root {
    --color-background: #020617;
    --color-surface: #0f172a;
    --color-primary: #fbbf24;
    /* ... */
  }
}
\`\`\`

### Personal Information
Update the following files:
- `src/components/Sidebar.jsx` - Profile info, social links
- `src/App.jsx` - About text, academics, projects
- `src/sections/LeetCodeSection.jsx` - Your LeetCode stats

### Navigation
Modify navigation items in `src/components/Navbar.jsx`

## 🌟 Key Design Elements

- **Accent Color**: Yellow (#fbbf24) for highlights, buttons, and progress indicators
- **Typography**: Inter font family for clean, modern text
- **Cards**: Glassmorphism with subtle borders and hover glow effects
- **Animations**: Fade up, slide in, scale on hover
- **Spacing**: Generous padding and gaps for breathing room

## 📝 License

Feel free to use this template for your own portfolio! Attribution appreciated but not required.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

**Built with ❤️ using React + Tailwind CSS**
