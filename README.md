# 🚀 Personal Portfolio Website

A modern, responsive personal portfolio website built with pure HTML, CSS, and JavaScript. No frameworks, no build tools - just clean, optimized code ready to deploy on GitHub Pages!

![Portfolio Preview](https://img.shields.io/badge/Status-Ready%20to%20Deploy-success)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## ✨ Features

### 🎨 Design & UI
- **Modern & Professional** - Clean design with beautiful gradient accents
- **Fully Responsive** - Optimized for mobile, tablet, and desktop
- **Dark Mode Toggle** - Switch between light and dark themes with preference saving
- **Smooth Animations** - Powered by AOS.js for eye-catching scroll animations
- **Interactive Elements** - Hover effects, transitions, and micro-interactions

### 📱 Sections
1. **Navigation Bar** - Sticky header with smooth scroll navigation
2. **Hero Section** - Eye-catching introduction with animated background
3. **About Me** - Professional background and statistics
4. **Skills** - Interactive skill cards with technology stack
5. **Projects** - Portfolio showcase with detailed modal pop-ups
6. **Contact** - Working contact form with FormSubmit integration
7. **Footer** - Social links and quick navigation

### 🛠️ Technical Features
- Scroll progress indicator
- Back to top button
- Mobile-responsive hamburger menu
- Project detail modals
- Form validation
- LocalStorage for theme persistence
- SEO optimized meta tags
- Print-friendly styles

## 📦 What's Included

```
PORTFOLIO/
├── index.html          # Main HTML structure
├── style.css          # Complete styling with animations
├── script.js          # All interactive functionality
└── README.md          # This file
```

## 🚀 Quick Start

### Option 1: Local Development

1. **Clone or download** this repository
2. **Open** `index.html` in your browser
3. That's it! No installation needed.

### Option 2: Live Server (Recommended)

If using VS Code:
1. Install the "Live Server" extension
2. Right-click on `index.html`
3. Select "Open with Live Server"

## ⚙️ Configuration

### 1. Update Personal Information

**In `index.html`:**

```html
<!-- Line 66: Hero Section -->
<h1 class="hero-title">Your Name</h1>
<h2 class="hero-subtitle">Your Title</h2>

<!-- Lines 82-90: Social Links -->
<a href="https://github.com/yourusername">GitHub</a>
<a href="https://linkedin.com/in/yourusername">LinkedIn</a>
<a href="mailto:your.email@example.com">Email</a>

<!-- Line 424: Contact Form - IMPORTANT! -->
<form action="https://formsubmit.co/YOUR_EMAIL_HERE" method="POST">
```

### 2. Update Profile Image

Replace the SVG placeholder in the About section (line 109) with your own image:

```html
<img src="path/to/your-photo.jpg" alt="Your Name" class="profile-img">
```

### 3. Customize Colors

**In `style.css` (lines 13-24):**

```css
:root {
    --primary-color: #6c63ff;      /* Main brand color */
    --secondary-color: #4834df;    /* Secondary accent */
    --accent-color: #00d2ff;       /* Highlight color */
}
```

### 4. Setup Contact Form

This portfolio uses [FormSubmit.co](https://formsubmit.co/) - a free form backend:

1. Replace `YOUR_EMAIL_HERE` in `index.html` (line 424) with your email
2. Submit the form once to activate
3. Confirm your email address
4. Done! You'll receive form submissions via email

**Alternative:** Use [Netlify Forms](https://www.netlify.com/products/forms/) if deploying to Netlify.

## 🌐 Deployment

### Deploy to GitHub Pages

1. **Create a GitHub repository** named `yourusername.github.io`

2. **Push your code:**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/yourusername.github.io.git
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to repository Settings
   - Navigate to "Pages" section
   - Source: Deploy from branch `main`
   - Folder: `/ (root)`
   - Click Save

4. **Access your site** at: `https://yourusername.github.io`

### Deploy to Netlify

1. **Sign up** at [Netlify](https://www.netlify.com)
2. **Drag & drop** your PORTFOLIO folder
3. **Done!** Your site is live in seconds

### Deploy to Vercel

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   cd PORTFOLIO
   vercel
   ```

## 🎨 Customization Tips

### Adding New Projects

1. **Add HTML** in the projects section:
```html
<div class="project-card" data-aos="fade-up">
    <div class="project-image">
        <img src="your-image.jpg" alt="Project Name">
        <div class="project-overlay">
            <button class="btn-view" data-project="projectid">
                <i class="fas fa-eye"></i> View Details
            </button>
        </div>
    </div>
    <div class="project-content">
        <h3>Project Name</h3>
        <p>Project description</p>
        <div class="project-tags">
            <span class="tag">Tech 1</span>
            <span class="tag">Tech 2</span>
        </div>
    </div>
</div>
```

2. **Add project data** in `script.js` (around line 225):
```javascript
projectid: {
    title: 'Project Title',
    description: 'Project description',
    features: ['Feature 1', 'Feature 2'],
    technologies: ['Tech 1', 'Tech 2'],
    challenges: 'Challenges faced',
    outcome: 'Project outcome'
}
```

### Adding New Skills

Copy and paste a skill card in `index.html` and update:
```html
<div class="skill-card" data-aos="fade-up" data-aos-delay="500">
    <div class="skill-icon">
        <i class="fab fa-react"></i>  <!-- Change icon -->
    </div>
    <h3>React</h3>  <!-- Change skill name -->
    <p>Component-based UI development</p>  <!-- Change description -->
</div>
```

Find icons at: [Font Awesome Icons](https://fontawesome.com/icons)

## 📚 External Resources Used

- **Google Fonts (Poppins)** - Typography
- **AOS.js** - Scroll animations
- **Font Awesome** - Icon library
- **FormSubmit.co** - Contact form backend

All loaded via CDN - no local dependencies!

## 🎯 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Opera (latest)

## 📱 Responsive Breakpoints

- **Desktop:** 1024px and above
- **Tablet:** 768px - 1023px
- **Mobile:** 480px - 767px
- **Small Mobile:** Below 480px

## 🐛 Troubleshooting

### Contact form not working?
- Make sure you replaced `YOUR_EMAIL_HERE` with your actual email
- Submit the form once and confirm your email with FormSubmit

### Animations not showing?
- Check browser console for errors
- Ensure AOS.js is loaded (check CDN link)
- Try hard refresh (Ctrl+F5)

### Dark mode not saving?
- Check if localStorage is enabled in your browser
- Try in incognito mode to test

### Mobile menu not working?
- Clear browser cache
- Check JavaScript console for errors

## 🔧 Performance Tips

1. **Optimize images** - Use tools like [TinyPNG](https://tinypng.com/)
2. **Replace SVG placeholders** with actual images (max 500KB each)
3. **Enable caching** on your hosting platform
4. **Test performance** with [Google PageSpeed Insights](https://pagespeed.web.dev/)

## 📄 License

This project is free to use for personal portfolios. Feel free to customize it to your needs!

## 💡 Future Enhancements

Consider adding:
- [ ] Blog section
- [ ] Project filtering by technology
- [ ] Testimonials carousel
- [ ] Download resume button
- [ ] Google Analytics integration
- [ ] Multi-language support

## 🤝 Contributing

Found a bug or have a suggestion? Feel free to:
1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📧 Contact

**Hardik Prajapati**
- Email: hardik@example.com
- GitHub: [@hardikprajapati](https://github.com/hardikprajapati)
- LinkedIn: [hardikprajapati](https://linkedin.com/in/hardikprajapati)

---

⭐ **Star this repo** if you found it helpful!

Built with ❤️ using HTML, CSS & JavaScript

---

### Quick Links

- [HTML Documentation](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS Documentation](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [JavaScript Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [AOS.js Documentation](https://michalsnik.github.io/aos/)
- [Font Awesome Icons](https://fontawesome.com/icons)
- [FormSubmit Documentation](https://formsubmit.co/)