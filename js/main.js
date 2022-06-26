let navbar = document.getElementById("navi");
let toTop = document.getElementById('toTop');
window.onscroll = function(){
    if (window.scrollY>50){
        navbar.classList.add("scrolling");
    } else{
        navbar.classList.remove("scrolling");
    }
    if (window.scrollY>700){
        toTop.style.display = "block";
    } else{
        toTop.style.display = "none";
    }
}

toTop.addEventListener('click',function(e){
    window.scrollTo(0,0);
})



////////////////
let imgRight = document.getElementById("right");
let imgLeft = document.getElementById("left");
window.addEventListener("mousemove",function(e){
    resultX = (e.clientX /window.innerWidth) * 100;
        resultY = (e.clientY / window.innerHeight) * 100;
        imgRight.style.right = resultX + "%";
        imgRight.style.bottom = resultY + "%";
        imgLeft.style.right = resultX + "%";
        imgLeft.style.bottom = resultY + "%";
});
//////////////////
// Slider Show
let RecipeShow = document.getElementById('RecipeShow');
let showData = document.getElementById('showData');
let closeShow = document.getElementById('closeShow');
let videoShow = document.getElementById('videoShow');
RecipeShow.addEventListener('click',getData);
showData.addEventListener('click',function(e){
    if(e.target == videoShow ){

    }else{
        closeGetData();
    }
})
window.addEventListener('keyup',function(e){
    if(e.code === "Escape"){
        closeGetData();
    } else {

    }
});
function getData(){
    showData.style = "transform: scale(1);"
}
function closeGetData(){
    showData.style = "transform : scale(0);"
}
// Slider Show
// owl Carousel // Ajax And API
getAjaxData("pizza");
$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
});

$('.owl-carousel').owlCarousel({
    loop:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:5
        }
    }
})

let meal = "";
let items = document.getElementsByClassName('item');

for(let i=0;i<items.length;i++){
    items[i].addEventListener("click",function(){
        for(let i =0;i<items.length;i++){
            items[i].classList.remove('activiation');
        }
        items[i].classList.add('activiation');
        items[i].style = "transition-duration: 0.5s ";
        meal = items[i].innerHTML;
        getAjaxData(meal);
        console.log(meal);
    })
}
let listFood = [];
function getAjaxData(meal){
    let requ = new XMLHttpRequest();
    requ.open("GET", `https://forkify-api.herokuapp.com/api/search?q=${meal}`);
    requ.send();
    requ.addEventListener("readystatechange", function(){
        if(requ.status==200&&requ.readyState==4){
            let resy = JSON.parse(requ.response).recipes;
            listFood = resy;
            doDisplay();
        }
    });
}
function doDisplay(){
    let content = "";
    for(let i=0;i<6;i++){
        content +=` 
        <div class="col-lg-4 col-md-6 col-12">
            <div class="foodList">
                <img src="${listFood[i].image_url}">
                <h4>${listFood[i].title}</h4>
                <p>120 calories</p>
                <p class="rank">
                    Rank :<span>${Math.floor(listFood[i].social_rank)}</span> / 100
                </p>
                <button>Add To Shopping</button>
            </div>
        </div> 
        `
    }
    document.getElementById('displayAjax').innerHTML = content;
}
// owl Carousel // Ajax And API

// Swiper
var myBook = new Swiper(".myBook", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    loop:true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 30,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    autoplay: {
    delay: 3000,
    },  
    speed: 2000,
});
// Swiper
// Our Team Swiper
var myTeam = new Swiper(".myTeam", {
    centeredSlides: true,
    loop:true,
    grabCursor: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
        0: {
            slidesPerView: 1.2,
        },
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        },
    },
    autoplay: {
        delay: 3000,
    },
    speed: 2000,
    
});
// Our Team Swiper
// to Top button



