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