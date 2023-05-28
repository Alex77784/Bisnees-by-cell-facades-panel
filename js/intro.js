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

