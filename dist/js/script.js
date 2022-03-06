window.addEventListener('DOMContentLoaded', () => {
    //Пока без делегирования событий
    //Буду оптимизировать js код после того, как доделаю все остальное
    //Не смотрите на него, мне стыдно немного))))
    const hamburger = document.querySelector('.hamburger'),
          overlay = document.querySelector('.menu__overlay'),
          hamburgerEl = document.querySelector('.hamburger__wrapper'),
          menu = document.querySelector('.menu'),
          closeElem = document.querySelector('.menu__close');
    
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