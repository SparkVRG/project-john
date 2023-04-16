'use strict';

let menuIcon = document.querySelector('.header__nav-mobile-button');
let menuList = document.querySelector('.header__nav-list');

function toggleMenuIcon() {
    menuIcon.classList.toggle('header__nav-mobile-button_active');

    if (menuList.style.right == '-800%') {
        menuList.style.right = '0';
    } else {
        menuList.style.right = '-800%';
    }
}

menuIcon.addEventListener('click', toggleMenuIcon);