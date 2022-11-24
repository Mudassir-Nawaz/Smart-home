const navBtn = document.querySelector('#navBtnOpen');
const menu = document.querySelector('#mobileMenu')
const body = document.body;
const menuItem = document.querySelectorAll('.menu-item')
const menubarIcon = document.querySelector('#menubar-icon');
const nav = document.querySelector('#navbar');

navBtn.addEventListener('click', ()=>{
    menu.classList.toggle('hidden')
    menu.classList.toggle('block')
})

menuItem.forEach((item)=> {
    item.addEventListener('click', ()=> {
        menu.classList.toggle('hidden')
        menu.classList.toggle('block')
    })
})

// window.addEventListener('scroll', (event) => {

//     // nav.classList.remove('bg-transparent')
//     // nav.classList.add('bg-white')

//     menu.classList.add('hidden')
//     if(menubarIcon.classList.contains('fa-xmark')){
//         menubarIcon.classList.toggle('fa-xmark');
//         menubarIcon.classList.toggle('fa-bars');
//     }

// });

menubarIcon.addEventListener('click', ()=> {
    menubarIcon.classList.toggle('fa-bars');
    menubarIcon.classList.toggle('fa-xmark');
})
