const navBtn = document.querySelector('#navBtnOpen');
const menuBar1 = document.querySelector('#mobileMenu')
const body = document.body;
const menuItem = document.querySelectorAll('.menu-item')
const menubarIcon = document.querySelector('#menubar-icon');
const nav = document.querySelector('#navbar');
const navItems = document.querySelector('#nav-item-list').children;

navBtn.addEventListener('click', ()=>{
    menuBar1.classList.toggle('hidden')
    menuBar1.classList.toggle('block')
})

menuItem.forEach((item)=> {
    item.addEventListener('click', ()=> {
        menuBar1.classList.toggle('hidden')
        menuBar1.classList.toggle('block')
    })
})

window.addEventListener('scroll', (event) => {


    menuBar1.classList.add('hidden')
    if(menubarIcon.classList.contains('fa-xmark')){
        menubarIcon.classList.toggle('fa-xmark');
        menubarIcon.classList.toggle('fa-bars');
    }

});

menubarIcon.addEventListener('click', ()=> {
    menubarIcon.classList.toggle('fa-bars');
    menubarIcon.classList.toggle('fa-xmark');
})


for (let v = 0; v < navItems.length; v++ ) {
    navItems[v].addEventListener('click', function() {
        menubarIcon.classList.toggle('fa-xmark');
        menubarIcon.classList.toggle('fa-bars');
    })
}