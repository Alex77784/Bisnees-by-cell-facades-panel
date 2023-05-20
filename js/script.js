let bodyLock = document.body;
let btnUp = document.querySelector('.btn-up');
let innovationImg = document.querySelector('.about-us__img>img');
darkBd;// in nav-menu.js
darkBdSuper;// in nav-menu.js
formApp;// in nav-menu.js
//function onOffSuperBd; in nav-menu.js

function onOffBodyDarkBd() {
    bodyLock.classList.toggle('active');
    darkBd.classList.toggle('active');
}

// btn-animation
let btns = document.querySelectorAll('.click')
btns.forEach(el => {
    el.addEventListener('click', function (e) {
        let
            size = Math.max(this.offsetWidth, this.offsetHeight),
            x = e.offsetX - size / 2,
            y = e.offsetY - size / 2,
            wave = this.querySelector('.wave')

        if (!wave) {
            wave = document.createElement('span')
            wave.className = 'wave'
        }
        wave.style.cssText = `width:${size}px;height:${size}px;top:${y}px;left:${x}px`
        this.appendChild(wave)
    })
})

// replacement photo in about-us
if (width <= 992) innovationImg.src = './images/about-us/about-us-short.jpg';

window.addEventListener('resize', () => {
    let width = window.screen.width;
    if (width <= 992) {
        innovationImg.src = './images/about-us/about-us-short.jpg';
    } else {
        innovationImg.src = './images/about-us/about-us.jpg';
    }
})
// work with btnUp
let blockSecret = document.querySelector('#secret');
let mediaWidth992 = window.matchMedia('(min-width: 992px)');

mediaWidth992.addEventListener('change', minWidth992);
minWidth992();

function minWidth992() {
    if (mediaWidth992.matches) {
        window.addEventListener('scroll', addClass)
    } else {
        window.removeEventListener('scroll', addClass)
    }
}
function addClass() {
    let centerBlockSecret = blockSecret.offsetTop + blockSecret.offsetHeight / 2;
    let centerVieport = window.scrollY + window.innerHeight / 2 + 50;

    if (centerBlockSecret < centerVieport) {
        btnUp.classList.add('visible');
    } else {
        btnUp.classList.remove('visible');
    }
}

btnUp.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})
