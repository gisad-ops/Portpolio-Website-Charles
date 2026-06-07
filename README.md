# Charles Aivan Dasig - Portfolio Website

A modern, responsive portfolio website featuring a bento-style layout with glassmorphism design, dark mode support, and clean animations.

## Project Structure

```
frontend/
├── public/                    # Static files & HTML pages
│   ├── index.html            # Home page (entry point)
│   └── pages/                # Subpages
│       ├── about.html
│       ├── skills.html
│       ├── projects.html
│       ├── contact.html
│       └── social.html
├── styles/                   # CSS files
│   ├── Home.css
│   ├── About.css
│   ├── Projects.css
│   └── Skills.css
├── src/                      # JavaScript source files
│   └── theme.js             # Dark mode toggle functionality
└── assets/                   # Static assets
    └── images/              # Image files
        ├── profile.jpg
        └── skills/          # Skill icons

backend/                      # Backend API (future development)
├── routes/                  # API routes
├── controllers/             # Route controllers
├── models/                  # Data models
├── middleware/              # Custom middleware
└── config/                  # Configuration files

README.md                     # This file
.gitignore                   # Git ignore rules
package.json                 # Project dependencies
```

## Features

- **Modern Design**: Bento-style layout with glassmorphism effects
- **Dark Mode**: Automatic theme persistence with localStorage
- **Responsive**: Mobile-friendly design with breakpoints for all devices
- **Smooth Animations**: Fade-in animations and hover effects
- **Fast Navigation**: Single-page app navigation with proper history
- **Accessible**: Semantic HTML and proper ARIA labels

## Tech Stack

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS variables
- **JavaScript (Vanilla)** - No frameworks, lightweight implementation
- **Fonts**: Epilogue (headings), Chivo (body)
- **Icons**: Tabler Icons

### Backend (Future)
- **Node.js** - Server runtime
- **Express.js** - Web framework
- **MongoDB** - Database
- **Git/GitHub** - Version control

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Portfolio-Website-Charles
   ```

2. **No build process needed** - Open `frontend/public/index.html` directly in your browser or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Or using Node.js (npx http-server)
   npx http-server frontend/public
   ```

3. **Visit** `http://localhost:8000` (or your configured port)

## CSS Variables

All colors and typography are controlled via CSS variables in the `:root` selector. Modify `frontend/styles/Home.css` to customize the theme:

```css
:root {
    --bg-color: #F2F3F4;
    --text-color: #000000;
    --accent-color: #E86100;
    /* ...more variables... */
}

html.dark {
    --bg-color: #0B0F19;
    --text-color: #F3F4F6;
    --accent-color: #FF7A00;
    /* ...dark mode colors... */
}
```

## File Paths

When moving files from the old structure to the new structure:
- Images: Move from `imagesProgram/` to `frontend/assets/images/skills/`
- Profile image: Move `owltilt.jpg` to `frontend/assets/images/profile.jpg`
- Update all image paths in HTML files

## Dark Mode

Dark mode is toggled via the moon icon in the navbar. The preference is saved to localStorage and persists across sessions.

```javascript
// Frontend\src\theme.js
function darkBtn() {
    html.classList.toggle("dark");
    localStorage.setItem("theme", html.classList.contains("dark") ? "dark" : "light");
}
```

## Responsive Breakpoints

- **Desktop**: 1024px+ (full bento grid)
- **Tablet**: 768px - 1023px (reduced grid columns)
- **Mobile**: Below 768px (single column layout)

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Future Enhancements

- [ ] Backend API integration for contact form
- [ ] Blog section with markdown support
- [ ] Project filtering and categories
- [ ] Analytics integration
- [ ] SEO optimization
- [ ] Performance monitoring

## Development Guidelines

1. **Keep styles organized** - Use CSS variables for consistency
2. **Mobile-first** - Design for mobile, enhance for desktop
3. **Semantic HTML** - Use proper heading levels, sections, etc.
4. **Accessibility** - Add alt text to images, use proper ARIA labels
5. **Performance** - Minimize HTTP requests, lazy load images

## Deploy

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Set root directory to `frontend`
4. Deploy automatically on push

### Other Platforms
- Netlify
- GitHub Pages
- Firebase Hosting

## License

MIT License - Feel free to use this template for your own portfolio

## Contact

- Email: charles@example.com
- GitHub: [Your GitHub Profile]
- LinkedIn: [Your LinkedIn Profile]

---

**Last Updated**: June 2026
