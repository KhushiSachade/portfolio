# Portfolio Website

A modern, minimalist portfolio website featuring a glassmorphism design inspired by Apple's aesthetic. Built with HTML, CSS, and JavaScript, using Bootstrap for responsiveness.

## Features

- **Modern Glassmorphism Design**: Clean, elegant interface with frosted glass effects
- **Fully Responsive**: Optimized for all devices using Bootstrap 5
- **Four Main Pages**:
  - **Landing Page**: Welcome section with integrated background image
  - **Experience Page**: Education, professional experience, and skills
  - **Projects Page**: Showcase of key projects and technical skills
  - **Contact Page**: "Let's Connect" section with contact form

## Setup Instructions

### 1. Add Background Image

Place your AI-generated background image in the `assets` folder and name it `background-image.jpg`. The image should:
- Be high resolution (recommended: 1920x1080 or higher)
- Feature a subtle, minimalist aesthetic
- Blend seamlessly with the glassmorphism theme

If no image is provided, the site will use a gradient fallback.

### 2. Deploy to GitHub Pages

1. Push all files to your GitHub repository
2. Go to repository Settings → Pages
3. Select the main branch as the source
4. Your site will be available at `https://[username].github.io/[repository-name]`

### 3. Customize Content

- Update personal information in HTML files
- Modify colors in `styles.css` (CSS variables in `:root`)
- Add your resume PDF link in `experience.html` (update the `resumeLink` handler in `script.js`)

## File Structure

```
portfolio_website/
├── index.html          # Landing page
├── experience.html     # Experience and education page
├── projects.html       # Projects and skills page
├── contact.html        # Contact page
├── styles.css          # Main stylesheet with glassmorphism theme
├── script.js           # JavaScript for interactivity
├── assets/             # Images and other assets
│   └── background-image.jpg  # Background image (to be added)
└── README.md           # This file
```

## Technologies Used

- HTML5
- CSS3 (with CSS Variables)
- JavaScript (Vanilla)
- Bootstrap 5.3.0
- Bootstrap Icons 1.11.0

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contact Form

The contact form is currently set up with client-side validation. To enable actual email sending, integrate with:
- [Formspree](https://formspree.io/)
- [EmailJS](https://www.emailjs.com/)
- [Netlify Forms](https://www.netlify.com/products/forms/)

Update the form submission handler in `script.js` to integrate your preferred service.

## License

This project is open source and available for personal use.

---

**Note**: Remember to add your background image to the `assets` folder before deploying!

