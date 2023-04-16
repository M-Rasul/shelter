'use strict';
const contactNav = document.querySelector('.contactsNav');
contactNav.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('footer').scrollIntoView({behavior: 'smooth'});
})