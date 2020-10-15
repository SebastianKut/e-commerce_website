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
const gotoTop = document.querySelector('.goto-top');
const scrollLink = document.querySelectorAll('.scroll-link');

// Smooth Scroll

Array.from(scrollLink).map(link => {
    link.addEventListener('click', e => {
        e.preventDefault();

        const id = e.currentTarget.getAttribute('href').slice(1);
        const element = document.getElementById(id);
        const navHeight = navBar.getBoundingClientRect().height; //pixel distance from the top of viewport
        const fixNav = navBar.classList.contains('fix__nav');
        let position = element.offsetTop - navHeight;

        if(!fixNav) {
            position = position - navHeight;
        }

        window.scrollTo({
            left: 0,
            top: position,
        });
        navContainer.style.left = '-30rem';
        document.body.classList.remove('active');


    });
})


// Fix NavBar
window.addEventListener("scroll", e => {
  const scrollHeight = window.pageYOffset;
  const navHeight = navBar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navBar.classList.add("fix__nav");
  } else {
    navBar.classList.remove("fix__nav");
  }

  if (scrollHeight > 300) {
    gotoTop.classList.add("show-top");
  } else {
    gotoTop.classList.remove("show-top");
  }
});

//AOS 
AOS.init();