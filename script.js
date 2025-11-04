/* ============================================
   PORTFOLIO WEBSITE - JAVASCRIPT
   Author: Hardik Prajapati
   ============================================ */

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    initAOS();
    initNavigation();
    initThemeToggle();
    initScrollProgress();
    initBackToTop();
    initProjectModals();
    initSmoothScroll();
    initContactForm();
});

// ============================================
// AOS ANIMATION INITIALIZATION
// ============================================

function initAOS() {
    AOS.init({
        duration: 1000,
        offset: 100,
        once: true,
        easing: 'ease-in-out',
        delay: 50,
    });
}

// ============================================
// NAVIGATION FUNCTIONALITY
// ============================================

function initNavigation() {
    const navbar = document.getElementById('navbar');
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Sticky navbar on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
        }

        // Update active nav link based on scroll position
        updateActiveNavLink();
    });

    // Mobile menu toggle
    menuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navbar.contains(event.target);
        if (!isClickInsideNav && navMenu.classList.contains('active')) {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

// Update active navigation link based on scroll position
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
}

// ============================================
// DARK MODE TOGGLE
// ============================================

function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
        updateThemeIcon(true);
    }

    themeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-theme');
        const isDark = body.classList.contains('dark-theme');

        // Save theme preference
        localStorage.setItem('theme', isDark ? 'dark' : 'light');

        // Update icon
        updateThemeIcon(isDark);

        // Refresh AOS
        AOS.refresh();
    });
}

function updateThemeIcon(isDark) {
    const themeToggle = document.getElementById('themeToggle');
    const icon = themeToggle.querySelector('i');

    if (isDark) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

// ============================================
// SCROLL PROGRESS BAR
// ============================================

function initScrollProgress() {
    const progressBar = document.getElementById('scroll-progress');

    window.addEventListener('scroll', function() {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight - windowHeight;
        const scrolled = window.scrollY;
        const progress = (scrolled / documentHeight) * 100;

        progressBar.style.width = progress + '%';
    });
}

// ============================================
// BACK TO TOP BUTTON
// ============================================

function initBackToTop() {
    const backToTop = document.getElementById('backToTop');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            backToTop.classList.add('active');
        } else {
            backToTop.classList.remove('active');
        }
    });

    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ============================================
// SMOOTH SCROLL
// ============================================

function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const navbarHeight = document.getElementById('navbar').offsetHeight;
                const targetPosition = targetSection.offsetTop - navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ============================================
// PROJECT MODALS
// ============================================

function initProjectModals() {
    const modal = document.getElementById('projectModal');
    const modalBody = document.getElementById('modalBody');
    const modalClose = document.getElementById('modalClose');
    const viewButtons = document.querySelectorAll('.btn-view');

    // Project data
    const projects = {
        eventpro: {
            title: 'EventPro - Event Management System',
            description: 'A comprehensive event management platform designed to streamline event planning, coordination, and execution.',
            features: [
                'User authentication and role-based access control Usertypes: Admin, Organizer, Attendee',
                'Event creation and management dashboard',
                'Attendee registration and ticketing system',
                'Real-time event updates ',
                //'Payment gateway integration',
              //  'Analytics and reporting tools',
                'Responsive design for mobile and desktop'
            ],
            technologies: ['JSP', 'Servlets', 'MySQL', 'Bootstrap', 'JavaScript', 'JDBC'],
            challenges: 'Implemented secure session management and optimized database queries for handling large-scale events with thousands of attendees.',
           // outcome: 'Successfully deployed for college events with 500+ active users and 95% positive feedback.'
        },
        directkisan: {
            title: 'DirectKisan - Agricultural Marketplace',
            description: 'A digital platform connecting farmers directly with consumers, eliminating middlemen and ensuring fair prices for agricultural products.',
            features: [
                'Farmer and consumer registration portals',
                'Product listing with image uploads',
                'Advanced search and filtering options',
                'Secure ordering ',
                //'Order tracking and delivery management',
               // 'Multi-language support (English, Hindi)',
                'Admin dashboard for platform management'
            ],
            technologies: ['ASP.NET', 'C#', 'SQL Server', 'Entity Framework', 'Bootstrap'],
            challenges: 'Designed a scalable architecture to handle high traffic during harvest seasons and implemented offline-first features for rural areas with limited connectivity.',
            //outcome: 'Platform facilitated over ₹10 lakh in transactions within the first three months of launch.'
        },
        employee: {
            title: 'Employee Management System',
            description: 'A robust desktop application for managing employee records, attendance, payroll, and performance tracking.',
            features: [
                'Employee information management (CRUD operations)',
               // 'Attendance tracking with biometric integration',
                'Automated payroll calculation',
               // 'Leave management system',
                //'Performance review and appraisal module',
                'Department and designation management',
                'Comprehensive reporting and export to Excel/PDF'
            ],
            technologies: ['Core Java', 'Java Swing', 'JDBC', 'MySQL', 'JasperReports'],
            challenges: 'Implemented complex payroll logic with tax calculations, deductions, and bonuses. Ensured data security with encryption and role-based access.',
            outcome: 'Reduced HR processing time by 60% and eliminated manual errors in payroll calculations.'
        },
        hospital: {
            title: 'Hospital Website',
            description: 'A modern, responsive website for a multi-specialty hospital featuring online appointment booking and patient information services.',
            features: [
                'Responsive design for all devices',
                'Online appointment booking system',
                'Doctor profiles and specialization listings',
                'Department and services information',
              //  'Patient testimonials and reviews',
                'Health blog and tips section',
               // 'Emergency contact and location map',
              //  'Multilingual support'
            ],
            technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', ],
            challenges: 'Created an intuitive user interface for patients of all age groups while ensuring fast loading times and accessibility compliance (WCAG 2.1).',
            //outcome: 'Increased online appointment bookings by 150% and improved patient satisfaction scores.'
        }
    };

    // Open modal
    viewButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const projectId = this.getAttribute('data-project');
            const project = projects[projectId];

            if (project) {
                modalBody.innerHTML = `
                    <h2>${project.title}</h2>
                    <p><strong>Overview:</strong> ${project.description}</p>

                    <h3>Key Features</h3>
                    <ul>
                        ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>

                    <h3>Technologies Used</h3>
                    <div class="project-tags" style="margin-bottom: 1.5rem;">
                        ${project.technologies.map(tech => `<span class="tag">${tech}</span>`).join('')}
                    </div>

                    <h3>Challenges & Solutions</h3>
                    <p>${project.challenges}</p>

                    <h3>Outcome</h3>
                    <p>${project.outcome}</p>
                `;

                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Close modal
    modalClose.addEventListener('click', closeModal);

    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close modal on ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// ============================================
// CONTACT FORM HANDLING
// ============================================

function initContactForm() {
    const form = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    // Note: FormSubmit.co will handle the actual submission
    // This code provides client-side validation and UX feedback

    form.addEventListener('submit', function(e) {
        // Basic validation
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !subject || !message) {
            e.preventDefault();
            showFormStatus('Please fill in all fields.', 'error');
            return;
        }

        if (!isValidEmail(email)) {
            e.preventDefault();
            showFormStatus('Please enter a valid email address.', 'error');
            return;
        }

        // Show loading message
        showFormStatus('Sending your message...', 'success');
    });
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showFormStatus(message, type) {
    const formStatus = document.getElementById('formStatus');
    formStatus.textContent = message;
    formStatus.className = 'form-status ' + type;

    setTimeout(() => {
        formStatus.className = 'form-status';
        formStatus.textContent = '';
    }, 5000);
}

// ============================================
// TYPING ANIMATION (Optional Enhancement)
// ============================================

function initTypingAnimation() {
    const subtitle = document.querySelector('.hero-subtitle');
    if (!subtitle) return;

    const text = subtitle.textContent;
    subtitle.textContent = '';
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            subtitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }

    // Start typing after page load
    setTimeout(typeWriter, 1000);
}

// ============================================
// PERFORMANCE OPTIMIZATION
// ============================================

// Lazy loading for images
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// ============================================
// ADDITIONAL INTERACTIONS
// ============================================

// Add ripple effect to buttons (optional)
function addRippleEffect() {
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');

            this.appendChild(ripple);

            setTimeout(() => ripple.remove(), 600);
        });
    });
}

// Parallax effect for hero section
function initParallax() {
    const hero = document.querySelector('.hero');

    if (hero) {
        window.addEventListener('scroll', function() {
            const scrolled = window.scrollY;
            const parallaxSpeed = 0.5;
            hero.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
        });
    }
}

// ============================================
// CONSOLE MESSAGE
// ============================================

console.log('%c👋 Hello, Developer!', 'font-size: 20px; font-weight: bold; color: #6C63FF;');
console.log('%cInterested in the code? Check out my GitHub!', 'font-size: 14px; color: #7F8C8D;');
console.log('%c🚀 Built with HTML, CSS & JavaScript', 'font-size: 12px; color: #00D2FF;');

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Debounce function for performance optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ============================================
// EXPORT FOR TESTING (if needed)
// ============================================

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initAOS,
        initNavigation,
        initThemeToggle,
        isValidEmail
    };
}
