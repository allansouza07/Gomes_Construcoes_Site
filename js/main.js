
const header = document.querySelector('.site-header');

const toggle = document.querySelector('.menu-toggle');

const nav = document.querySelector('.main-nav');

// HEADER FIXO COM EFEITO AO ROLAR

function updateHeader() {

    header.classList.toggle(
        'scrolled',
        window.scrollY > 20
    );

}

updateHeader();

window.addEventListener(
    'scroll',
    updateHeader,
    { passive: true }
);

// MENU MOBILE

toggle.addEventListener('click', () => {

    const isOpen = nav.classList.toggle('open');

    toggle.setAttribute(
        'aria-expanded',
        String(isOpen)
    );

});

nav.querySelectorAll('a').forEach(link => {

    link.addEventListener('click', () => {

        nav.classList.remove('open');

        toggle.setAttribute(
            'aria-expanded',
            'false'
        );

    });

});

// ANIMAÇÃO DOS ELEMENTOS CONFORME A ROLAGEM

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add('visible');

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12,
        rootMargin: '0px 0px -35px 0px'
    }

);

document.querySelectorAll('.reveal').forEach(element => {

    observer.observe(element);

});

// CONTROLES DO CARROSSEL DE OBRAS

const track = document.querySelector('.portfolio-track');

const next = document.querySelector('.slider-next');

const prev = document.querySelector('.slider-prev');

next.addEventListener('click', () => {

    track.scrollBy({
        left: track.clientWidth * 0.78,
        behavior: 'smooth'
    });

});

prev.addEventListener('click', () => {

    track.scrollBy({
        left: -track.clientWidth * 0.78,
        behavior: 'smooth'
    });

});

// ANO AUTOMÁTICO NO RODAPÉ

document.getElementById('year').textContent =
    new Date().getFullYear();