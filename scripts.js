// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    // Toggle the mobile menu
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navbar = document.getElementById('navbar');

    hamburgerMenu.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });

    // Close the mobile menu when clicking on a link
    navbar.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('active');
        });
    });
});
