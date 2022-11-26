const holder = document.querySelector('#logoHolder');
const mobileNav = document.querySelector('#mobileMenu');
const documentBody = document.body;
const menuBar = document.querySelector('#menubar-icon');
const testi = document.querySelector('#testimonials');
// Names
const name1 = document.querySelector('.name1');
const name2 = document.querySelector('.name2');
const name3 = document.querySelector('.name3');
const name4 = document.querySelector('.name4');
// Testimoniasl text
const text1 = document.querySelector('.text1')
const text2 = document.querySelector('.text2')
const text3 = document.querySelector('.text3')
const text4 = document.querySelector('.text4')
// FAQ Q
const acc = document.querySelectorAll('#faq-q');
// Navbar Landing Page
const navItems = document.querySelector('#nav-item-list').children;

for (let v = 0; v < navItems.length; v++ ) {
  navItems[v].addEventListener('click', function() {
      menubarIcon.classList.toggle('fa-xmark');
      menubarIcon.classList.toggle('fa-bars');
  })
}
/* -------------------------- */

// FAQ A
const faqA = document.querySelector('#faq-answer')

name2.addEventListener('click', ()=> {
    text2.classList.remove('hidden')

    text1.classList.add('hidden')
    text3.classList.add('hidden')
    text4.classList.add('hidden')
})
name3.addEventListener('click', ()=> {
    text3.classList.remove('hidden')

    text2.classList.add('hidden')
    text1.classList.add('hidden')
    text4.classList.add('hidden')
})
name4.addEventListener('click', ()=> {
    text4.classList.remove('hidden')

    text2.classList.add('hidden')
    text3.classList.add('hidden')
    text1.classList.add('hidden')
})
name1.addEventListener('click', ()=> {
    text1.classList.remove('hidden')

    text2.classList.add('hidden')
    text3.classList.add('hidden')
    text4.classList.add('hidden')
})

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
  
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
}


for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
    let icon = this.firstElementChild;
    icon.classList.toggle('fa-plus');
    icon.classList.toggle('fa-minus');
  });
}

// Nav LOGO

holder.innerHTML = "Landing"

body.addEventListener('mouseover', ()=> {
  

  console.log(documentBody.className.toString().includes("fp-viewing-second"))
  if(documentBody.className.toString().includes('fp-viewing-firstPage')){
    holder.innerHTML = "Landing"
  }else if(documentBody.className.toString().includes('fp-viewing-second')){
    holder.innerHTML = "Features"
  }else if(documentBody.className.toString().includes('fp-viewing-third')){
    holder.innerHTML = "Features"
  }else if(documentBody.className.toString().includes('fp-viewing-fourth')){
    holder.innerHTML = "Features"
  }else if(documentBody.className.toString().includes('fp-viewing-fifth')){
    holder.innerHTML = "Features"
  }else if(documentBody.className.toString().includes('fp-viewing-sixth')){
    holder.innerHTML = "Testimonials"
  }else if(documentBody.className.toString().includes('fp-viewing-seventh')){
    holder.innerHTML = "FAQ"
  }else if(documentBody.className.toString().includes('fp-viewing-eight')){
    holder.innerHTML = "Pricing"
  }else if(documentBody.className.toString().includes('fp-viewing-nine')){
    holder.innerHTML = "Services"
  }
})