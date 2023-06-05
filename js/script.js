//function onOffSuperBd; in nav-menu.js

function onOffBodyDarkBd() {
    bodyLock.classList.toggle('active');
    darkBd.classList.toggle('active');
}

// btn-animation
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
mediaWidth767.addEventListener('change', minWidth767);

minWidth767();
function minWidth767() {
    if (mediaWidth767.matches) {
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

// window scroll
window.addEventListener('scroll', eventScroll);

function eventScroll() {
    let scrlPageFromTopToViewport75 = Math.round(window.scrollY + (window.innerHeight / 100 * 75));
    // offerBlock
    if (offerTitle.offsetTop <= scrlPageFromTopToViewport75) {
        offerTitle.classList.add('animation');
    }
    // benefitBlock
    if (cardsBenefit[0].offsetTop <= scrlPageFromTopToViewport75) {
        cardsBenefit.forEach(el => el.classList.add('animation'));
    }
    // secretBlock
    if (secretTitle.offsetTop <= scrlPageFromTopToViewport75) {
        secretTitle.classList.add('animation');
    }
    // innovationBlock
    if (innovTitle.offsetTop <= scrlPageFromTopToViewport75) {
        innovTitle.classList.add('animation');
    }
    // about-usBlock
    if (aboutTitle.offsetTop <= scrlPageFromTopToViewport75) {
        aboutTitle.classList.add('animation');
    }
    // numberBlock
    if (numberTitle.offsetTop <= scrlPageFromTopToViewport75) {
        document.querySelector('.number__title').classList.add('animation');
    }
    // leaveMailBlock
    if (leaveMailInner.offsetTop <= scrlPageFromTopToViewport75) {
        leaveMailTitle.classList.add('animation');
    }
}