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
