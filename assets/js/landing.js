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

// Testimonials
const faqA = document.querySelector('#faq-answer')

name2.addEventListener('click', ()=> {
    text2.classList.remove('hidden')
    name2.classList.add('bg-prupleAccent')
    name2.classList.add('text-white')
    
    
    name3.classList.remove('bg-prupleAccent')
    name3.classList.remove('text-white')
    name4.classList.remove('bg-prupleAccent')
    name4.classList.remove('text-white')
    name1.classList.remove('bg-prupleAccent')
    name1.classList.remove('text-white')
    text1.classList.add('hidden')
    text3.classList.add('hidden')
    text4.classList.add('hidden')
})
name3.addEventListener('click', ()=> {
    text3.classList.remove('hidden')
    name3.classList.add('bg-prupleAccent')
    name3.classList.add('text-white')

    name2.classList.remove('bg-prupleAccent')
    name2.classList.remove('text-white')
    name4.classList.remove('bg-prupleAccent')
    name4.classList.remove('text-white')
    name1.classList.remove('bg-prupleAccent')
    name1.classList.remove('text-white')
    text2.classList.add('hidden')
    text1.classList.add('hidden')
    text4.classList.add('hidden')
})
name4.addEventListener('click', ()=> {
    text4.classList.remove('hidden')
    name4.classList.add('bg-prupleAccent')
    name4.classList.add('text-white')

    name2.classList.remove('bg-prupleAccent')
    name2.classList.remove('text-white')
    name3.classList.remove('bg-prupleAccent')
    name3.classList.remove('text-white')
    name1.classList.remove('bg-prupleAccent')
    name1.classList.remove('text-white')
    text2.classList.add('hidden')
    text3.classList.add('hidden')
    text1.classList.add('hidden')
})
name1.addEventListener('click', ()=> {
    text1.classList.remove('hidden')
    name1.classList.add('bg-prupleAccent')
    name1.classList.add('text-white')

    name2.classList.remove('bg-prupleAccent')
    name2.classList.remove('text-white')
    name3.classList.remove('bg-prupleAccent')
    name3.classList.remove('text-white')
    name4.classList.remove('bg-prupleAccent')
    name4.classList.remove('text-white')
    text2.classList.add('hidden')
    text2.classList.add('hidden')
    text3.classList.add('hidden')
    text4.classList.add('hidden')
})

// For testimonials
// for (let i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     this.classList.toggle("active");

//     var panel = this.nextElementSibling;
//     if (panel.style.display === "block") {
//       panel.style.display = "none";
//     } else {
//       panel.style.display = "block";
//     }
//   });
// }

// For FAQ
var arrayOfFaq = Array.from(acc)
// console.log(everyOther)

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
    // console.log(this.nextElementSibling)
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight = '0') {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }else{
      panel.style.maxHeight = null;
    } 
    
  });
}


arrayOfFaq.forEach(element => {
  
  Array.prototype.except = function(element) {
    return this.filter(function(x) { return x !== element; });        
  }; 
  element.addEventListener('click', ()=> {
    var everyOther = arrayOfFaq.except(element)
    everyOther.forEach(panel => {
      panel.nextElementSibling.style.display = "none";
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
      let icon = panel.firstElementChild;
      if(icon.classList.contains("fa-minus")){
        icon.classList.toggle('fa-minus')
        icon.classList.toggle('fa-plus')
      }
      // console.log(panel.nextElementSibling)
    })
  })
});



for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    
    let icon = this.firstElementChild;
    icon.classList.toggle('fa-plus');
    icon.classList.toggle('fa-minus');
    if (panel.style.display === "block") {
      icon.classList.add('fa-minus');
      icon.classList.remove('fa-plus');
    } else {
    icon.classList.add('fa-plus');
    icon.classList.remove('fa-minus');
    }
  });
}



// Funtion to change Header text

holder.innerHTML = "Landing"
setInterval(() => {
  
  // console.log(documentBody.className.toString().includes("fp-viewing-second"))
  if(documentBody.className.toString().includes('fp-viewing-firstPage')){
    holder.innerHTML = "Landing"
    linksChild[0].style.fontWeight = "900"

    linksChild[1].style.fontWeight = "normal"
    linksChild[2].style.fontWeight = "normal"
    linksChild[3].style.fontWeight = "normal"
    linksChild[4].style.fontWeight = "normal"
    linksChild[5].style.fontWeight = "normal"

    // console.log(linksChild[1])
  }else if(documentBody.className.toString().includes('fp-viewing-second')){
    holder.innerHTML = "Features"
    linksChild[1].style.fontWeight = "900"
    
    linksChild[0].style.fontWeight = "normal"
    linksChild[2].style.fontWeight = "normal"
    linksChild[3].style.fontWeight = "normal"
    linksChild[4].style.fontWeight = "normal"
    linksChild[5].style.fontWeight = "normal"
  }else if(documentBody.className.toString().includes('fp-viewing-third')){
    holder.innerHTML = "Features"
    linksChild[1].style.fontWeight = "900"

    linksChild[0].style.fontWeight = "normal"
    linksChild[2].style.fontWeight = "normal"
    linksChild[3].style.fontWeight = "normal"
    linksChild[4].style.fontWeight = "normal"
    linksChild[5].style.fontWeight = "normal"
  }else if(documentBody.className.toString().includes('fp-viewing-fourth')){
    holder.innerHTML = "Features"
    linksChild[1].style.fontWeight = "900"

    linksChild[0].style.fontWeight = "normal"
    linksChild[2].style.fontWeight = "normal"
    linksChild[3].style.fontWeight = "normal"
    linksChild[4].style.fontWeight = "normal"
    linksChild[5].style.fontWeight = "normal"
  }else if(documentBody.className.toString().includes('fp-viewing-fifth')){
    holder.innerHTML = "Features"
    linksChild[1].style.fontWeight = "900"

    linksChild[0].style.fontWeight = "normal"
    linksChild[2].style.fontWeight = "normal"
    linksChild[3].style.fontWeight = "normal"
    linksChild[4].style.fontWeight = "normal"
    linksChild[5].style.fontWeight = "normal"
  }else if(documentBody.className.toString().includes('fp-viewing-sixth')){
    holder.innerHTML = "Testimonials"
    linksChild[2].style.fontWeight = "900"

    linksChild[1].style.fontWeight = "normal"
    linksChild[0].style.fontWeight = "normal"
    linksChild[3].style.fontWeight = "normal"
    linksChild[4].style.fontWeight = "normal"
    linksChild[5].style.fontWeight = "normal"
  }else if(documentBody.className.toString().includes('fp-viewing-seventh')){
    holder.innerHTML = "FAQ"
    linksChild[4].style.fontWeight = "900"

    linksChild[1].style.fontWeight = "normal"
    linksChild[0].style.fontWeight = "normal"
    linksChild[3].style.fontWeight = "normal"
    linksChild[2].style.fontWeight = "normal"
    linksChild[5].style.fontWeight = "normal"
  }else if(documentBody.className.toString().includes('fp-viewing-eight')){
    holder.innerHTML = "Pricing"
    linksChild[3].style.fontWeight = "900"

    linksChild[1].style.fontWeight = "normal"
    linksChild[0].style.fontWeight = "normal"
    linksChild[4].style.fontWeight = "normal"
    linksChild[2].style.fontWeight = "normal"
    linksChild[5].style.fontWeight = "normal"
  }else if(documentBody.className.toString().includes('fp-viewing-nine')){
    holder.innerHTML = "Why choose us"
    linksChild[5].style.fontWeight = "900"

    linksChild[1].style.fontWeight = "normal"
    linksChild[0].style.fontWeight = "normal"
    linksChild[4].style.fontWeight = "normal"
    linksChild[2].style.fontWeight = "normal"
    linksChild[3].style.fontWeight = "normal"

  }  
}, 100);

// For Background Change

const navbarL = document.querySelector('#navbar')
const links = document.querySelector('.links')
const button = document.querySelector('#button')
let linksChild = Array.from(links.children)
const logo = document.querySelector('#logo')

setInterval(() => {
  if (window.innerWidth >= 768) {
    if(documentBody.classList.toString().includes('fp-viewing-firstPage')){
      logo.classList.remove('text-prupleAccent')
      logo.classList.add('text-white')
      linksChild.forEach(child => {
        child.classList.remove('text-prupleAccent')
      });
      linksChild.forEach(child => {
        child.classList.add('text-white')
      });
  
      navbarL.classList.remove('bg-white');
  
      button.classList.add('bg-whiteAccent')
      button.classList.remove('bg-prupleAccent')
      button.classList.add('text-prupleAccent')
      button.classList.remove('text-whiteAccent')
    }else{
      navbarL.classList.add('bg-white')
      logo.classList.add('text-prupleAccent')
      linksChild.forEach(child => {
        child.classList.add('text-prupleAccent')
      });
      
      button.classList.remove('bg-whiteAccent')
      button.classList.add('bg-prupleAccent')
      button.classList.remove('text-prupleAccent')
      button.classList.add('text-whiteAccent')
  
  
    }  
  }else{
    navbarL.classList.remove('bg-white');
    navbarL.classList.add('bg-transparent');
  }
}, 100);

setInterval(() => {
  if(documentBody.classList.toString().includes('fp-viewing-sixth')){
    menuBar.classList.add('text-prupleAccent')
    menuBar.classList.remove('text-white')
  }else{
    menuBar.classList.add('text-white')
    menuBar.classList.remove('text-prupleAccent')
    
  }
}, 100);

setInterval(() => {
  
  let mouse = document.querySelector('.mousey');
  if(documentBody.classList.toString().includes('fp-viewing-eight')){
    mouse.style.backgroundColor = "#50489B"
  }else{
    mouse.style.backgroundColor = "transparent"

  }
}, 1000);
setInterval(() => {
  
  let mouse = document.querySelector('.mousey');
  if(documentBody.classList.toString().includes('fp-viewing-nine')){
    mouse.style.display = "none"
  }else{
    mouse.style.display = "block"

  }
}, 1000);



// Pricing

const monthly = document.querySelector('#monthly');
const yearly = document.querySelector('#yearly');
const prices = document.querySelectorAll('.prices')
monthly.addEventListener('click', ()=> {

  for (let i = 0; i < prices.length; i++) {
    prices[i].innerHTML = '<span class="inline text-4xl font-semibold">$0</span>/mo'
  }
  monthly.classList.remove('bg-white')
  monthly.classList.add('bg-transparent')
  monthly.classList.remove('text-prupleAccent')
  monthly.classList.add('text-white')
  
  yearly.classList.add('bg-white')
  yearly.classList.remove('bg-transparent')
  yearly.classList.add('text-prupleAccent')
  yearly.classList.remove('text-white')
})

yearly.addEventListener('click', ()=> {

  for (let i = 0; i < prices.length; i++) {
    prices[i].innerHTML = '<span class="inline text-4xl font-semibold">$0</span>/year'
  }
  yearly.classList.add('bg-transparent')
  yearly.classList.remove('bg-white')
  yearly.classList.remove('text-prupleAccent')
  yearly.classList.add('text-white')

  monthly.classList.add('bg-white')
  monthly.classList.remove('bg-transparent')
  monthly.classList.add('text-prupleAccent')
  monthly.classList.remove('text-white')
})