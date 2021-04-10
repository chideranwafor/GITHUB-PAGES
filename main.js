function myToggle() {
    const nav = document.querySelector('#toggle');
    if (nav.className === 'nav-links') {
        nav.className += ' open';
    } else {
        nav.className = 'nav-links';
    }
}