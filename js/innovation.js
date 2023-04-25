let img = document.querySelector('.innovation__img');
let beforeButton = document.querySelector('.innovation__button');
let back = document.querySelector('.innovation__box-content');

if (width < 992) {
    beforeButton.before(img);
}

window.addEventListener('resize', () => {
    let width = window.screen.width;
    if (width < 992) {
        beforeButton.before(img);
    } else {
        back.after(img);
    }
})
