// handburger menu
let menuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuicon.addEventListener("click", () => {
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});


// Scroll sections active links
let sections = document.querySelectorAll('.section-wrapper');
let navlinks = document.querySelectorAll('header div nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header div nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    // Sticky navbar
    let header = document.querySelector('header');

    header.classList.toggle("sticky", window.scrollY > 100);

    menuicon.classList.remove('bx-x');
    navbar.classList.remove('active');

}    


