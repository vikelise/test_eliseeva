// Инициализация Swiper
const swiper = new Swiper('.swiper', {
    loop: true,
    navigation: {
        nextEl: '.navigation__next',
        prevEl: '.navigation__prev',
    },
});

// Анимация меню с использованием GSAP
const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const close = document.querySelector('.close');
const overlay = document.querySelector('.overlay');

burger.addEventListener('click', () => {
    gsap.to(menu, {y: '0%', autoAlpha: 1, duration: 0.5, ease: 'power2.out'});
    overlay.classList.add('active');
});

close.addEventListener('click', () => {
    gsap.to(menu, {y: '-100%', autoAlpha: 0, duration: 0.5, ease: 'power2.in'});
    overlay.classList.remove('active');
});

overlay.addEventListener('click', () => {
    gsap.to(menu, {y: '-100%', autoAlpha: 0, duration: 0.5, ease: 'power2.in'});
    overlay.classList.remove('active');
});

gsap.set(menu, {y: '-100%', autoAlpha: 0});

// Логика для всплывающего окна
const infoButton = document.querySelector('.button-info');
const popupOverlay = document.getElementById('popupOverlay');
const popupClose = document.getElementById('popupClose');

function openPopup() {
    popupOverlay.style.display = 'flex';
    popupOverlay.style.justifyContent = 'center';
    popupOverlay.style.alignItems = 'center';
}

function closePopup() {
    popupOverlay.style.display = 'none';
}

infoButton.addEventListener('click', openPopup);

popupClose.addEventListener('click', closePopup);

popupOverlay.addEventListener('click', (event) => {
    if (event.target === popupOverlay) {
        closePopup();
    }
});