# Frontend Architecture

## Directory Structure

```
frontend/
├── public/                         # Served directly
│   ├── index.html                 # Home page (entry point)
│   └── pages/                     # Sub-pages
│       ├── about.html
│       ├── skills.html
│       ├── projects.html
│       ├── contact.html           # Contact form page
│       └── social.html            # Social links page
│
├── src/                           # JavaScript source
│   └── theme.js                   # Dark mode toggle & localStorage
│
├── styles/                        # Stylesheets
│   ├── Home.css                   # Main design system + Bento grid (1000+ lines)
│   ├── About.css                  # About page styles
│   ├── Projects.css               # Projects page styles (with loading animation)
│   └── Skills.css                 # Skills grid page styles
│
└── assets/                        # Static assets
    └── images/
        ├── profile.jpg            # Main profile photo (owltilt.jpg)
        └── skills/                # Skill technology icons (PNG files)
            ├── html.png
            ├── css.png
            ├── javascript.png
            ├── react.png
            ├── git.png
            ├── github.png
            ├── nodejs.png
            ├── expressjs.png
            ├── mongodb.png
            ├── mysql.png
            ├── python.png
            └── vercel.png
```

## Page Navigation

All pages use a consistent floating navbar with these links:
- Home (../index.html)
- About (about.html / ../index.html)
- Skills (skills.html)
- Projects (projects.html)
- Contact (contact.html)
- Social (social.html)
- Theme Toggle (moon/sun icon)
- Contact CTA Button

## CSS Architecture

### Design System (Home.css)
- CSS Custom Properties for colors and typography
- Light mode (`:root`) and dark mode (`html.dark`)
- Complete navbar styling
- Bento grid layout system
- Component styles (cards, buttons, badges)
- Responsive breakpoints: 1024px, 768px

### Color Palette
**Light Mode:**
- Background: #F2F3F4
- Text: #000000
- Accent: #E86100
- Cards: #FFFFFF

**Dark Mode:**
- Background: #0B0F19
- Text: #F3F4F6
- Accent: #FF7A00
- Cards: #111827

### Typography
- **Headings**: Epilogue (wght: 400, 600, 700, 800)
- **Body**: Chivo (wght: 300, 400, 700)

## JavaScript (theme.js)

```javascript
// Load saved theme on page load
if(localStorage.getItem("theme") === "dark") {
    html.classList.add("dark");
}

// Toggle theme and save preference
function darkBtn() {
    html.classList.toggle("dark");
    localStorage.setItem("theme", 
        html.classList.contains("dark") ? "dark" : "light");
}
```

## Image Management

1. **Profile Image**: `assets/images/profile.jpg`
   - Original: `owltilt.jpg`
   - Used on: Home page (Bento grid cell)
   - Size: Optimized for web

2. **Skill Icons**: `assets/images/skills/*.png`
   - Location: Skills page grid
   - Technologies: HTML, CSS, JS, React, Git, GitHub, Node, Express, MongoDB, MySQL, Python, Vercel
   - Format: PNG with transparency

## Responsive Design

### Breakpoints
- **1024px and below**: Reduced grid columns, adjusted spacing
- **768px and below**: Single column layout, optimized mobile navigation

### Key Considerations
- Navbar remains fixed but adapts size on mobile
- Bento grid converts to single column on mobile
- Images scale appropriately
- Touch-friendly button sizes

## Migration from Old Structure

### Old → New
- `index.html` → `frontend/public/index.html`
- `navbar/*.html` → `frontend/public/pages/*.html`
- `style/*.css` → `frontend/styles/*.css`
- `imagesProgram/*` → `frontend/assets/images/skills/*`
- `owltilt.jpg` → `frontend/assets/images/profile.jpg`
- `index.js` → `frontend/src/theme.js`

### Path Updates
All HTML pages updated with relative paths:
- CSS: `../../styles/Home.css` (from pages)
- JS: `../../src/theme.js` (from pages)
- Images: `../../assets/images/` (from pages)

## Performance Optimization

1. **Lazy Loading**: Images load on scroll
2. **CSS Variables**: Single point of truth for theming
3. **Minimal JS**: Only theme toggle, no frameworks
4. **Responsive Images**: SVG icons via CDN
5. **Efficient Selectors**: Direct class-based styling

## Accessibility

- Semantic HTML (`nav`, `main`, `section`, `footer`)
- Proper heading hierarchy
- Alt text on images
- ARIA labels on interactive elements
- Keyboard navigation support
- Color contrast compliance (WCAG AA)

## Next Steps

1. Copy image files to `frontend/assets/images/`
2. Test all pages in new structure
3. Verify responsive design on mobile
4. Set up backend API endpoints
5. Connect contact form to backend
6. Deploy to hosting platform
