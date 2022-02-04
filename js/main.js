/**Declare the element for menu nav */
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav__item');
const menuBtn = document.querySelector('.menu-btn');
const hamburgerBtn = document.querySelector('.menu-btn__burger');

/**Declare the variable for menu status */
let showMenu = false;

//Registered an event listener
menuBtn.addEventListener('click', toggleMenu);
//Define function toggleMenu
function toggleMenu() {
    if (showMenu === false) {
        //Add the open class to make items visible
        hamburgerBtn.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        navItems.forEach(item => item.classList.add('open'));
        //Change the status of current menu
        showMenu = true;
    } else {
        //Add the open class to make items visible
        hamburgerBtn.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        //Change the status of current menu
        navItems.forEach(item => item.classList.remove('open'));
        showMenu = false;
    }
}

