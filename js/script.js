const burger = document.getElementById("burger")
const links = document.querySelectorAll("a")


burger.addEventListener("click", function(){
    this.classList.toggle("rotate")
    
    for(let x of links){
        x.style.display = "block"
    }
})


// nav finish 

// Tabs 


var tabs = document.querySelectorAll(".tab")


function showtab(id){
    for(var x of tabs){
        x.style.display = "none"
       
    }
document.getElementById(id).style.display = "block"

}



const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });