'use strict';
const nav = document.querySelector('nav');
const navlinks = document.querySelectorAll('.item');
const petsBlock = document.querySelector('.pets');
const makeFriendBtn = document.querySelector('.friend');
makeFriendBtn.addEventListener('click', function() {
    petsBlock.scrollIntoView({behavior: 'smooth'});
})
nav.addEventListener('click', function(e) {
    if(e.target.classList.contains('special')) {
        return;
    }
    e.preventDefault();
    const el = e.target;
    if(!el.classList.contains('item')) {
        return;
    }
    navlinks.forEach(navlink => navlink.classList.remove('item_active'));
    el.classList.add('item_active');
    const id = el.getAttribute('href');
    document.querySelector(id).scrollIntoView({behavior: 'smooth'});
})