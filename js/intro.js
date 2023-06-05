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

buttonPlayYoutube.addEventListener('click', playBlackIntro);
function playBlackIntro() {
    this.style.display = 'none';
    youtube.lastElementChild.style.display = 'block';
    youtube.lastElementChild.src += '?autoplay=1&mute=0';
}