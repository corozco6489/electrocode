let searchform = document.querySelector(".search-form")
let searchbtn = document.getElementById("search-btn")

let cardItem = document.querySelector(".card-item-container")
let cardbtn = document.getElementById("cart-btn")

let menubtn = document.getElementById("menu-btn")
let navbar = document.querySelector(".navbar")


searchbtn.addEventListener("click",function(){

    searchform.classList.toggle("active") 
    navbar.classList.remove("active")
  
    cardItem.classList.remove("active")
})

cardbtn.addEventListener("click",()=>{
    cardItem.classList.toggle("active")
    navbar.classList.remove("active")
    searchform.classList.remove("active")
   
})

menubtn.addEventListener("click",()=>{
    navbar.classList.toggle("active")

    searchform.classList.remove("active")
    cardItem.classList.remove("active")
})

window.onscroll= ()=>{
    navbar.classList.remove("active")
    searchform.classList.remove("active")
    cardItem.classList.remove("active")
}

