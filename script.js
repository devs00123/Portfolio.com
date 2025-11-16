document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileNav = document.getElementById('mobile-nav');
    const navLinks = mobileNav.querySelectorAll('a');

    // --- 1. Mobile Navigation Toggle ---
    menuToggle.addEventListener('click', function() {
        mobileNav.classList.toggle('open');
        // Toggle icon between bars and close (optional)
        const icon = menuToggle.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times'); // Requires font-awesome fa-times icon
    });

    // --- 2. Close Mobile Nav on Link Click ---
    // Closes the menu when a link inside the mobile nav is clicked.
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileNav.classList.remove('open');
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });
});


