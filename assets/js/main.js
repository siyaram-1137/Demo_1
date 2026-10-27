$(document).ready(function(){

    $('.testimonial-slider').owlCarousel({

        loop:true,

        margin:30,

        autoplay:true,

        autoplayTimeout:3500,

        smartSpeed:800,

        dots:true,

        nav:true,

        navText:[
            "<i class='fa-solid fa-angle-left'></i>",
            "<i class='fa-solid fa-angle-right'></i>"
        ],

        responsive:{

            0:{
                items:1
            },

            768:{
                items:2
            },

            1200:{
                items:2
            }

        }

    });

});

/*==================================
FILTER
===================================*/

const filterButtons = document.querySelectorAll(".gallery-filter button");

const galleryItems = document.querySelectorAll(".gallery-item");

filterButtons.forEach(button=>{

button.addEventListener("click",()=>{

filterButtons.forEach(btn=>btn.classList.remove("active"));

button.classList.add("active");

const filter=button.getAttribute("data-filter");

galleryItems.forEach(item=>{

if(filter==="all"){

item.style.display="block";

setTimeout(()=>{

item.style.opacity="1";

item.style.transform="scale(1)";

},50);

}

else if(item.classList.contains(filter)){

item.style.display="block";

setTimeout(()=>{

item.style.opacity="1";

item.style.transform="scale(1)";

},50);

}

else{

item.style.opacity="0";

item.style.transform="scale(.8)";

setTimeout(()=>{

item.style.display="none";

},250);

}

});

});

});


/*==================================
LIGHTBOX
===================================*/

const lightbox=document.getElementById("galleryLightbox");

const lightboxImg=document.getElementById("lightboxImage");

document.querySelectorAll(".gallery-item img").forEach(image=>{

image.addEventListener("click",()=>{

lightbox.classList.add("active");

lightboxImg.src=image.src;

});

});


document.querySelector(".close-lightbox").onclick=function(){

lightbox.classList.remove("active");

};


lightbox.onclick=function(e){

if(e.target===lightbox){

lightbox.classList.remove("active");

}

};

const targetDate = new Date("December 31, 2026 23:59:59").getTime();

const timer = setInterval(function () {

    const now = new Date().getTime();

    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (distance < 0) {

        clearInterval(timer);

        document.querySelector(".countdown").innerHTML =
            "<h3>Registration Closed</h3>";

    }

}, 1000);


var campSwiper = new Swiper(".campSwiper",{

    slidesPerView:1,

    spaceBetween:30,

    loop:true,

    autoplay:{

        delay:3000,

        disableOnInteraction:false,

    },

    pagination:{

        el:".campSwiper .swiper-pagination",

        clickable:true,

    },

    navigation:{

        nextEl:".campSwiper .swiper-button-next",

        prevEl:".campSwiper .swiper-button-prev",

    },

    breakpoints:{

        768:{

            slidesPerView:2

        },

        1200:{

            slidesPerView:3

        }

    }

});