let headerInner = document.querySelector('.header__inner');
let burger = document.querySelector('.burger');
let darkBd = document.querySelector('.dark-bd');

burger.addEventListener('click', burgerOnOff);
function burgerOnOff() {
    headerInner.classList.toggle('active');
    onOffBodyDarkBd();
}

darkBd.addEventListener('click', burgerOff);
function burgerOff() {
    headerInner.classList.remove('active');
    OffBodyDarkBd();
}
