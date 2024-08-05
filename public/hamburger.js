document.addEventListener('DOMContentLoaded', () => {
    // Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Create Blog Button Modal
    const createBlogBtn = document.getElementById('createBlogBtn');
    const modal = document.getElementById('myModal');
    const span = document.getElementsByClassName('close')[0];

    if (createBlogBtn) {
        createBlogBtn.addEventListener('click', () => {
            modal.style.display = 'block';
        });
    }

    if (span) {
        span.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});