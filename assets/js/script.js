const navBtn = document.querySelector('#navBtnOpen');
const menu = document.querySelector('#mobileMenu')
navBtn.addEventListener('click', ()=>{
    menu.classList.toggle('hidden')
    menu.classList.toggle('block')
})