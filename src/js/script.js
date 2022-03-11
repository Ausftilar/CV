window.addEventListener('DOMContentLoaded', () => {
    //Nav menu
    const panel = document.querySelectorAll('.panel'),
          hamburgerEl = document.querySelector('.hamburger__wrapper'),
          menu = document.querySelector('.menu'),
          menuLink = document.querySelectorAll('.menu__link');

    panel.forEach(item => {
        item.addEventListener('click', () => {
            menu.classList.toggle('active');
            hamburgerEl.classList.toggle('hamburger__wrapper_active');
        });
    });

    window.addEventListener('keydown', (e) => {
        if (e.key == 'Escape') {
            menu.classList.remove('active');
            hamburgerEl.classList.remove('hamburger__wrapper_active');
        }
    });

    //Ratings
    const counters = document.querySelectorAll('.skills__ratings-value'),
          lines = document.querySelectorAll('.skills__ratings-line span');

    counters.forEach((item, i) => {
        lines[i].style.width = item.innerHTML;
    });

    //Scroll
    const anchors = document.querySelectorAll('a[href*="#"]');

    anchors.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const blockId = item.getAttribute('href');
            document.querySelector('' + blockId).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });

    //Validate
    $('.contacts__form').validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            checkbox: "required"
        },
        messages: {
            name: {
                required: "Пожалуйста, введите имя",
                minlength: jQuery.validator.format("Введите минимум {0} символа!")
            },
            email: {
                required: "Пожалуйста, введите почту",
                email: "Неправильно введен адрес почты"
            },
            checkbox: "Необходимо согласие"
        }
    });

    //Submit form
    $('.contacts__form').submit(function(e) {
        e.preventDefault();

        if (!$(this).valid()) {
            return;
        }

        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");

            $('.contacts__form').trigger('reset');
        });
        
        return false;
    });
});