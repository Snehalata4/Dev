const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)

function fixNav() {
    if(window.scrollY > nav.offsetHeight + 10) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}



const hamburger = document.querySelector(".nav_hamburger");
const linksContainer = document.querySelector(".nav_menu");
const links = document.querySelectorAll(".nav_menu_link");

hamburger.addEventListener("click", () => {
  linksContainer.classList.toggle("active");
  hamburger.classList.toggle("active");
});

window.addEventListener("resize", () => {
  if (window.matchMedia("(max-width: 550px)").matches) {
    closeMenu();
  }
});

if (window.matchMedia("(max-witdh: 550px").matches) {
  closeMenu();
}

function closeMenu() {
  links.forEach((link) => {
    link.addEventListener("click", () => {
      linksContainer.classList.remove("active");
      hamburger.classList.remove("active");
    });
  });
}


/* https://codepen.io/EllieSadler/pen/NGvrNq */
// $(document).ready(function(){
//   $('.slider-1').slick({
//     infinite: false,
//     dots: true,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     draggable: false,
//     variableWidth: true,
//     centerMode: false,
//     useCSS:false,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     responsive: [{
//       breakpoint: 1024,
//       settings: {
//           slidesToShow: 2
//       }
//       }, {
//           breakpoint: 650,
//           settings: {
//               initialSlide: 2,
//               slidesToShow: 1
//           }
//       }]

//   });
// });


// carousel
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


// // canvas
// const canvas = document.getElementById("canvas");
// const ctx = canvas.getContext("2d");

// // Rounded rectangle with four different radii
// ctx.strokeStyle = "green";
// ctx.fillStyle = "Pink";
// ctx.beginPath();
// ctx.roundRect(400, 20, 282, 400, [0, 30, 50, 60]);
// ctx.fill();
// ctx.stroke();

// accordion 
document.addEventListener("DOMContentLoaded", function() {
const accordionButtons = document.querySelectorAll(".accordion__button");

  accordionButtons.forEach(button => {
    button.addEventListener("click", function() {
      const isExpanded = button.getAttribute("aria-expanded") === "true";
      const contentId = button.getAttribute("aria-controls");
      const content = document.getElementById(contentId);

      // Collapse all accordions
      accordionButtons.forEach(btn => {
        const contentToHide = document.getElementById(btn.getAttribute("aria-controls"));
        btn.setAttribute("aria-expanded", "false");
        if (contentToHide) {
          contentToHide.setAttribute("hidden", "");
        }
      });

      // If the clicked accordion was not expanded, expand it
      if (!isExpanded) {
        button.setAttribute("aria-expanded", "true");
        content.removeAttribute("hidden");
      }
    });
  });
  
});



// Gallery
$(document).ready(function(){
  $('#owl-2 .owl-carousel').owlCarousel(
  {
    items: 5,
    margin: 16,
    stagePadding: 22,
    loop: true,
    autoplay: true,
    autoplaySpeed: 500,
    navSpeed: 500,
    dots: true,
    dotsEach: true,
    nav: true,
    navText: ['<i class="fa fa-solid fa-chevron-left"></i>','<i class="fa fa-solid fa-chevron-right"></i>'],
    // navText: ['',''],
    autoplayTimeout: 2000,
    autoplayHoverPause: false,
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        }
    }
  }
);

});