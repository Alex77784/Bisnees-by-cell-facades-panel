let youtube = document.querySelector('.intro__box-youtube');
let boxButton = document.querySelector('.intro__box-button');
let content = document.querySelector('.intro__content');
let width = window.screen.width;

if (width < 992) {
    boxButton.before(youtube);
}

window.addEventListener('resize', () => {
    let width = window.screen.width;
    if (width < 992) {
        boxButton.before(youtube);
    } else {
        content.after(youtube);
    }
})

