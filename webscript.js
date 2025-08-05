
        // Simple JavaScript for interactivity
        document.addEventListener('DOMContentLoaded', function() {
            // Smooth scrolling for navigation links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
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

            // Newsletter form submission
            document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
                e.preventDefault();
                const email = this.querySelector('.newsletter-input').value;
                if (email) {
                    alert('Thank you for subscribing! We\'ll send you amazing deals.');
                    this.reset();
                }
            });

            // Add to cart functionality
            document.querySelectorAll('.add-to-cart').forEach(button => {
                button.addEventListener('click', function() {
                    const productTitle = this.closest('.product-card').querySelector('.product-title').textContent;
                    alert(`${productTitle} has been added to your cart!`);
                    
                    // Update cart badge
                    const cartBadge = document.querySelector('.cart-badge');
                    const currentCount = parseInt(cartBadge.textContent);
                    cartBadge.textContent = currentCount + 1;
                });
            });

            // Wishlist functionality
            document.querySelectorAll('.wishlist-btn').forEach(button => {
                button.addEventListener('click', function() {
                    const icon = this.querySelector('i');
                    if (icon.classList.contains('far')) {
                        icon.classList.remove('far');
                        icon.classList.add('fas');
                        icon.style.color = '#dc2626';
                    } else {
                        icon.classList.remove('fas');
                        icon.classList.add('far');
                        icon.style.color = '';
                    }
                });
            });

            // Search functionality
            document.querySelector('.search-btn').addEventListener('click', function() {
                const searchTerm = document.querySelector('.search-input').value;
                if (searchTerm) {
                    alert(`Searching for: ${searchTerm}`);
                }
            });

            // Add scroll effect to header
            let lastScrollTop = 0;
            window.addEventListener('scroll', function() {
                const header = document.querySelector('.header');
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                
                if (scrollTop > lastScrollTop && scrollTop > 100) {
                    header.style.transform = 'translateY(-100%)';
                } else {
                    header.style.transform = 'translateY(0)';
                }
                lastScrollTop = scrollTop;
            });
        });
