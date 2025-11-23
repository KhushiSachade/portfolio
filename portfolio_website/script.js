// ============================================
// Portfolio Website JavaScript
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initNavigation();
    initContactForm();
    initScrollAnimations();
    initBackgroundImage();
});

// ============================================
// Navigation
// ============================================

function initNavigation() {
    const navbar = document.querySelector('.glass-nav');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Add scroll effect to navbar
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(26, 26, 26, 0.95)';
            navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.5)';
        } else {
            navbar.style.background = 'rgba(26, 26, 26, 0.85)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
        }
    });

    // Active link highlighting
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ============================================
// Contact Form
// ============================================

function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            // Validate form
            if (!name || !email || !subject || !message) {
                showFormMessage('Please fill in all fields.', 'error');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showFormMessage('Please enter a valid email address.', 'error');
                return;
            }

            // Simulate form submission (replace with actual form handling)
            // For GitHub Pages, you can use services like Formspree, EmailJS, or Netlify Forms
            showFormMessage('Thank you for your message! I\'ll get back to you soon.', 'success');
            
            // Reset form
            contactForm.reset();

            // Optional: Integrate with email service
            // Example with EmailJS or Formspree:
            // sendEmail(name, email, subject, message);
        });
    }
}

function showFormMessage(message, type) {
    const formMessage = document.getElementById('formMessage');
    if (formMessage) {
        formMessage.textContent = message;
        formMessage.className = type;
        formMessage.style.display = 'block';
        
        // Hide message after 5 seconds
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    }
}

// ============================================
// Scroll Animations
// ============================================

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all glass cards
    document.querySelectorAll('.glass-card').forEach(card => {
        observer.observe(card);
    });
}

// ============================================
// Background Image Handling
// ============================================

function initBackgroundImage() {
    const backgroundImage = document.getElementById('backgroundImage');
    
    if (backgroundImage) {
        // Check if image exists, if not, use a placeholder gradient
        const img = new Image();
        img.onload = function() {
            backgroundImage.style.opacity = '0.3';
        };
        img.onerror = function() {
            // If image doesn't exist, use a gradient background
            backgroundImage.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
            backgroundImage.style.opacity = '0.2';
        };
        img.src = 'assets/background-image.jpg';
    }
}

// ============================================
// Resume Link Handler
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const resumeLink = document.getElementById('resumeLink');
    if (resumeLink) {
        resumeLink.addEventListener('click', function(e) {
            e.preventDefault();
            // Replace with actual resume URL when available
            alert('Resume download will be available soon. Please contact me directly for a copy.');
            // Uncomment and update when resume is ready:
            // window.open('path/to/resume.pdf', '_blank');
        });
    }
});

// ============================================
// Utility Functions
// ============================================

// Add smooth fade-in on page load
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Add parallax effect to background image (optional)
window.addEventListener('scroll', function() {
    const backgroundImage = document.getElementById('backgroundImage');
    if (backgroundImage) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.3;
        backgroundImage.style.transform = `translateY(${rate}px) scale(1.1)`;
    }
});

