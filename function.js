/*==================== SHOW MENU ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close'),
      navImg = document.getElementById('img-toggle')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

if(navImg){
  navImg.addEventListener('click', () =>{
    navMenu.classList.add('show-menu')
  })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ADD BLUR TO HEADER ====================*/
const blurHeader = () => {
    const header = document.getElementById('header')
    // When the scroll is greater than 100 viewport height, add the blur-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('blur-header')
                       : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*=================== ADD LOGO TO BLUR HEADER ===============*/
/* const addLogo = () => {
  const header = document.getElementById('img-toggle')
  this.scrollY >= 50 ? header.classList.add('')
} */

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

document.querySelectorAll('.buttonStory-summary').forEach(function(summary) {
  summary.addEventListener('click', function() {
    const text = summary.querySelector('.buttonStory-text');
    if (summary.parentElement.hasAttribute('open')) {
      text.style.display = 'inline'; // Show when closed
    } else {
      text.style.display = 'none'; // Hide when opened
    }
  });
});

// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
  const linkElement = document.getElementById('animated-link');

  // Listen for the end of the animation
  linkElement.addEventListener('animationend', function() {
    linkElement.textContent = 'Read Now'; // Change the text
  });
});
