document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const searchContainer = document.querySelector('.search-container');
    const icon = mobileMenuBtn.querySelector('i');
    
    // Toggle mobile menu and search bar
    mobileMenuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        searchContainer.classList.toggle('active');
        
        // Change icon based on menu state
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
    
    // Close mobile menu when clicking on a link
    const navItems = document.querySelectorAll('.nav-link');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
                searchContainer.classList.remove('active');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });
    
    // Highlight active navigation item
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navItems.forEach(navItem => navItem.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Make search bar sticky when scrolling
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
            navbar.style.position = 'sticky';
            navbar.style.top = '0';
        } else {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            navbar.style.position = 'relative';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Parallax effect for hero section
    const heroSection = document.querySelector('.hero-section');
    
    if (heroSection) {
        window.addEventListener('scroll', function() {
            const scrollPosition = window.pageYOffset;
            heroSection.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
        });
    }
    
    // Animate product items on hover
    const productItems = document.querySelectorAll('.product-item');
    
    productItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.05)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        // Click handler for product items
        item.addEventListener('click', function() {
            // In a real implementation, this would link to the product page
            window.location.href = '#';
        });
    });
    
    // Button hover effects
    const buttons = document.querySelectorAll('.cta-button, .secondary-button');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Add to cart functionality
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const productCard = this.closest('.product-card');
            const productName = productCard.querySelector('.product-name').textContent;
            const productPrice = productCard.querySelector('.current-price').textContent;
            
            // Animation for add to cart
            this.innerHTML = '<i class="fas fa-check"></i> Added';
            this.style.backgroundColor = '#2ecc71';
            
            // Reset button after animation
            setTimeout(() => {
                this.innerHTML = '<i class="fas fa-shopping-cart"></i> Add to Cart';
                this.style.backgroundColor = '';
            }, 2000);
            
            // In a real implementation, you would add to cart here
            console.log(`Added to cart: ${productName} - ${productPrice}`);
        });
    });
    
    // Quick view functionality
    const quickViewButtons = document.querySelectorAll('.quick-view-btn');
    
    quickViewButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation(); // Prevent triggering the product card click
            const productCard = this.closest('.product-card');
            const productName = productCard.querySelector('.product-name').textContent;
            
            // In a real implementation, this would open a modal with product details
            console.log(`Quick view: ${productName}`);
        });
    });
    
    // Product card click (would navigate to product page in real implementation)
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Only navigate if not clicking on buttons
            if (!e.target.closest('button')) {
                const productName = this.querySelector('.product-name').textContent;
                console.log(`Navigating to product page: ${productName}`);
                // window.location.href = '/product-page';
            }
        });
    });
    
    // View all products button
    const viewAllBtn = document.querySelector('.view-all-btn');
    if (viewAllBtn) {
        viewAllBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('View all products clicked');
            // window.location.href = '/products';
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Category card hover effect enhancement
    const categoryCards = document.querySelectorAll('.category-card');
    
    categoryCards.forEach(card => {
        // Preload images for smoother hover effects
        const imgUrl = card.querySelector('.category-image').style.backgroundImage;
        const img = new Image();
        img.src = imgUrl.replace(/url\(['"]?(.*?)['"]?\)/i, '$1');
        
        // Click handler (in a real implementation, this would navigate to the category page)
        card.addEventListener('click', function(e) {
            e.preventDefault();
            const categoryName = this.querySelector('.category-name').textContent;
            console.log(`Navigating to ${categoryName} category`);
            // window.location.href = `/categories/${categoryName.toLowerCase().replace(' ', '-')}`;
        });
    });
    
    // Animation for section header
    const sectionHeader = document.querySelector('.section-header');
    if (sectionHeader) {
        // Simple fade-in animation
        sectionHeader.style.opacity = '0';
        sectionHeader.style.transform = 'translateY(20px)';
        sectionHeader.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        setTimeout(() => {
            sectionHeader.style.opacity = '1';
            sectionHeader.style.transform = 'translateY(0)';
        }, 100);
    }
    
    // Animation for category cards
    const categoryGrid = document.querySelector('.categories-grid');
    if (categoryGrid) {
        const cards = categoryGrid.querySelectorAll('.category-card');
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
            
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 200 + (index * 100));
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Animation for category cards
    const categoryCards = document.querySelectorAll('.category-card');
    
    categoryCards.forEach((card, index) => {
        // Initial state
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        
        // Animate in with delay
        setTimeout(() => {
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 150 * index);
        
        // Preload images
        const imgUrl = card.querySelector('.category-image').style.backgroundImage;
        const img = new Image();
        img.src = imgUrl.replace(/url\(['"]?(.*?)['"]?\)/i, '$1');
    });
    
    // View all button animation
    const viewAllBtn = document.querySelector('.view-all-btn');
    if (viewAllBtn) {
        viewAllBtn.addEventListener('mouseenter', function() {
            this.querySelector('i').style.transform = 'translateX(3px)';
        });
        
        viewAllBtn.addEventListener('mouseleave', function() {
            this.querySelector('i').style.transform = 'translateX(0)';
        });
    }
    
    // Section header animation
    const sectionHeader = document.querySelector('.section-header');
    if (sectionHeader) {
        setTimeout(() => {
            sectionHeader.style.opacity = '1';
            sectionHeader.style.transform = 'translateY(0)';
        }, 100);
        
        sectionHeader.style.opacity = '0';
        sectionHeader.style.transform = 'translateY(20px)';
        sectionHeader.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Get modal elements
    const modal = document.getElementById('teamModal');
    const btn = document.getElementById('learnMoreBtn');
    const span = document.getElementsByClassName('close-modal')[0];
    
    // When user clicks the button, open the modal
    btn.onclick = function() {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }
    
    // When user clicks on (x), close the modal
    span.onclick = function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    }
    
    // When user clicks anywhere outside the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Re-enable scrolling
        }
    }
    
    // Add hover effect to team image
    const teamImage = document.querySelector('.team-image');
    teamImage.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.03)';
    });
    
    teamImage.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });
    
    // Add smooth scroll to about section if coming from another page
    if (window.location.hash === '#about') {
        setTimeout(() => {
            document.querySelector('.about-section').scrollIntoView({ 
                behavior: 'smooth' 
            });
        }, 100);
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const reviews = document.querySelectorAll('.review-card');
    const dotsContainer = document.querySelector('.carousel-dots');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentIndex = 0;
    
    // Create dots
    reviews.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
            goToReview(index);
        });
        dotsContainer.appendChild(dot);
    });
    
    const dots = document.querySelectorAll('.dot');
    
    // Function to update carousel
    function updateCarousel() {
        reviews.forEach((review, index) => {
            review.classList.remove('active');
            dots[index].classList.remove('active');
        });
        
        reviews[currentIndex].classList.add('active');
        dots[currentIndex].classList.add('active');
    }
    
    // Go to specific review
    function goToReview(index) {
        currentIndex = index;
        updateCarousel();
    }
    
    // Next review
    function nextReview() {
        currentIndex = (currentIndex + 1) % reviews.length;
        updateCarousel();
    }
    
    // Previous review
    function prevReview() {
        currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
        updateCarousel();
    }
    
    // Event listeners
    nextBtn.addEventListener('click', nextReview);
    prevBtn.addEventListener('click', prevReview);
    
    // Auto-rotate reviews (optional)
    let autoRotate = setInterval(nextReview, 5000);
    
    // Pause auto-rotation on hover
    const carousel = document.querySelector('.reviews-carousel');
    carousel.addEventListener('mouseenter', () => {
        clearInterval(autoRotate);
    });
    
    carousel.addEventListener('mouseleave', () => {
        autoRotate = setInterval(nextReview, 5000);
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
            nextReview();
        } else if (e.key === 'ArrowLeft') {
            prevReview();
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // FAQ Accordion Functionality
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });
    
    // Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Here you would typically send the data to your server
        // For this example, we'll just show a success message
        alert(`Thank you, ${name}! Your message has been sent. We'll respond to you at ${email} soon.`);
        
        // Reset the form
        contactForm.reset();
    });
    
    // Form validation on blur
    const inputs = document.querySelectorAll('input, textarea');
    
    inputs.forEach(input => {
        input.addEventListener('blur', () => {
            if (input.value.trim() === '' && input.required) {
                input.style.borderColor = '#dc3545';
            } else {
                input.style.borderColor = '#e9ecef';
            }
        });
    });
});