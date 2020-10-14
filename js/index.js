/*
=============
Navigation
=============
 */
const navOpen = document.querySelector('.nav__hamburger');
const navClose = document.querySelector('.close__toggle');
const menu = document.querySelector('.nav__menu');

navOpen.addEventListener('click', () => {
    menu.classList.add('open');
    document.body.classList.add('active');
    menu.style.left = '0';
    menu.style.width = '30rem';
});

navClose.addEventListener('click', () => {
    menu.classList.remove('open');
    document.body.classList.remove('active');
    menu.style.left = '-30rem';
    menu.style.width = '0';
});

/*
=============
Fixed Navigation
=============
 */
const navBar = document.querySelector('.navigation');
const goToTop = document.querySelector('.goto-top');
const scrollLink = document.querySelectorAll('.scroll-link');

// Smooth Scroll

Array.from(scrollLink).map(link => {
    link.addEventListener('click', e => {
        e.preventDefault();

        const id = e.currentTarget.getAttribute('href').slice(1);
        const element = document.getElementById(id);
        console.log (e.currentTarget.getAttribute('href'));
        
    })
})


// Fix NavBar


//AOS 
AOS.init();