// JavaScript to toggle the mobile menu
document.querySelector('.menu-icon').addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
});
