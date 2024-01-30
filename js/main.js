const menu = document.getElementsByClassName("mobile-menu")[0];
function toggleHamburger() {
    if (menu && menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
}


window.addEventListener('scroll', () => {
    menu.classList.add('hidden');
});

window.addEventListener('click', (e) => {
    const isMenu = e.target.classList.contains('hamburger');
    if (isMenu) {
        return;
    } else {
        menu.classList.add('hidden');
    }
});