window.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger'),
          overlay = document.querySelector('.menu__overlay'),
          hamburgerEl = document.querySelector('.hamburger__wrapper'),
          menu = document.querySelector('.menu'),
          closeElem = document.querySelector('.menu__close'),
          menuLink = document.querySelectorAll('.menu__link');
    
    hamburger.addEventListener('click', () => {
        menu.classList.add('active');
        hamburgerEl.classList.add('hamburger__wrapper_active');
    });

    closeElem.addEventListener('click', () => {
        menu.classList.remove('active');
        hamburgerEl.classList.remove('hamburger__wrapper_active');
    });

    overlay.addEventListener('click', () => {
        menu.classList.remove('active');
        hamburgerEl.classList.remove('hamburger__wrapper_active');
    });

    menuLink.forEach(item => {
        item.addEventListener('click', () => {
            menu.classList.remove('active');
            hamburgerEl.classList.remove('hamburger__wrapper_active');
        });
    });

    window.addEventListener('keydown', (e) => {
        if (e.key == 'Escape') {
            menu.classList.remove('active');
            hamburgerEl.classList.remove('hamburger__wrapper_active');
        }
    });

    const counters = document.querySelectorAll('.skills__ratings-value'),
          lines = document.querySelectorAll('.skills__ratings-line span');

    counters.forEach((item, i) => {
        lines[i].style.width = item.innerHTML;
    });
});