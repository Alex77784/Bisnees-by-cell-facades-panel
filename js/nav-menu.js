let headerInner = document.querySelector('.header__inner');
let burger = document.querySelector('.burger');
let navLinks = document.querySelectorAll('.nav__link');
let headerButton = document.querySelector('.header__btn');
let darkBd = document.querySelector('.dark-bd');
let darkBdSuper = document.querySelector('.dark-bd-super');
let formApp = document.querySelector('.leave-mail__col-mail');
let closeButton = document.querySelector('.close-button');


burger.addEventListener('click', burgerOnOff);
function burgerOnOff() {
    headerInner.classList.toggle('active');
    onOffBodyDarkBd();
}

darkBd.addEventListener('click', burgerOff);
function burgerOff() {
    headerInner.classList.remove('active');
    onOffBodyDarkBd();
}

navLinks.forEach(link => {
    link.addEventListener('click', burgerOff);
})

// click btn in header
headerButton.addEventListener('click', leaveApplication);
function leaveApplication() {
    onOffSuperBd();
    visibleForm();
}

function visibleForm() {
    formApp.classList.add('popup');
    if (darkBdSuper.classList.contains('active')) {
        closeButton.classList.add('active');
    }
}

closeButton.addEventListener('click', btnClose)
function btnClose() {
    darkBdSuper.classList.toggle('active');
    formApp.classList.remove('popup');
    if (window.screen.width > 992) {
        bodyLock.classList.toggle('active');
    } else {
        bodyLock.classList.add('active');
    }
    closeButton.classList.remove('active');
};

darkBdSuper.addEventListener('click', onOffSuperBd);
function onOffSuperBd() {
    if (window.screen.width > 992) {
        bodyLock.classList.toggle('active');
    } else {
        bodyLock.classList.add('active');
    }
    darkBdSuper.classList.toggle('active');
    formApp.classList.remove('popup');
    closeButton.classList.remove('active');
}