/*==================== SHOW MENU ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

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

/*
const button = document.querySelector("#nav-menu")

button.addEventListener("click", () => {
  button.innerText = " " //make this disappear or fade
  button.disabled = true
  link.classList.remove('d-none')
})

const link = document.querySelector("#reset-link")

link.addEventListener("click", () => {
  button.innerText = "Click me!"
  button.disabled = false
  link.classList.add('d-none')
})
*/

/*
function onclick_event() {
    document.getElementById("nav-menu").innerHTML =

} */

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



const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                          : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

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





// NOT ACTUALLY NEEDED NOW BUT KEPT AS AN EXAMPLE
// function onclick_event() {
//    document.getElementById("arm").innerHTML =
//    "Arm Balance: as Leonardo da Vinci once said, “once you have tasted flight, you will forever walk the earth with your eyes turned skyward”. Arm balances have a funny way of seeming impossible until one day they are not. But on mastering arm balance techniques, the impossible is attained and flight ensues. That taste of flight captures the soul of yogis. Arm balances have amazing benefits for overall health and wellness and some poses also offer hip-opening and flexibility in the thighs and hamstrings. Mastering this style is bound to give you a major confidence boost. This is best suited to intermediate and advanced.";
// }
