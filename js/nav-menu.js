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
    link.addEventListener('click', function () {
        headerInner.classList.remove('active');
        bodyLock.classList.remove('active');
        darkBd.classList.remove('active');
    });
})

// click btn in header
callEmail.forEach(el => el.addEventListener('click', leaveApplication));
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
    if (!(headerInner.classList.contains('active'))) {
        bodyLock.classList.remove('active');
    }
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