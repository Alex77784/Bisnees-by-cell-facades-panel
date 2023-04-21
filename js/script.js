let bodyLock = document.body;
darkBd;// in nav-menu.js


function onOffBodyDarkBd() {
    bodyLock.classList.toggle('active');
    darkBd.classList.toggle('active');
}
function OffBodyDarkBd() {
    bodyLock.classList.remove('active');
    darkBd.classList.remove('active');
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