<script>
    document.addEventListener('DOMContentLoaded', function () {
        
        // --- Mobile Menu Functionality ---
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const closeMobileMenuButton = document.getElementById('close-mobile-menu');
        const mobileMenu = document.getElementById('mobile-menu');

        const openMenu = () => {
            mobileMenu.classList.remove('mobile-menu-hidden');
            mobileMenu.classList.add('mobile-menu-visible');
            document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
        };

        const closeMenu = () => {
            mobileMenu.classList.remove('mobile-menu-visible');
            mobileMenu.classList.add('mobile-menu-hidden');
            document.body.style.overflow = ''; // Restore scrolling
        };

        if (mobileMenuButton && mobileMenu && closeMobileMenuButton) {
            mobileMenuButton.addEventListener('click', openMenu);
            closeMobileMenuButton.addEventListener('click', closeMenu);
            
            // Also close menu if a link is clicked
            mobileMenu.querySelectorAll('a, button').forEach(link => {
                link.addEventListener('click', () => {
                    // Don't close immediately for external links
                    if (!link.hasAttribute('target')) {
                        closeMenu();
                    }
                });
            });
        }

        // --- Header Style on Scroll ---
        const header = document.getElementById('header');
        if (header) {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    header.classList.add('shadow-lg');
                } else {
                    header.classList.remove('shadow-lg');
                }
            });
        }
    });
</script>
