document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('nav-categories');
    const user = document.getElementById('user-links');

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('active');
        user.classList.toggle('active');
    });
});
