const searchForm = document.querySelector(".search-form");
const cardItem = document.querySelector(".card-items-container");
const navbar = document.querySelector(".navbar");

// *Buttons
const searchBtn = document.querySelector("#search-btn")
const cardBtn = document.querySelector("#card-btn")
const menuBtn = document.querySelector("#menu-btn")


searchBtn.addEventListener("click", function () {
    searchForm.classList.toggle("active");
    document.addEventListener("click", function (e) {
        if (
            !e.composedPath().includes(searchBtn) && 
            !e.composedPath().includes(searchForm)
        ) {
            searchForm.classList.remove("active");
        }
    })
})



cardBtn.addEventListener("click", function () {
    cardItem.classList.toggle("active");
    document.addEventListener("click", function (e) {
        if (
            !e.composedPath().includes(cardBtn) && 
            !e.composedPath().includes(cardItem)
        ) {
            cardItem.classList.remove("active");
        }
    })
})

menuBtn.addEventListener("click", function () {
    navbar.classList.toggle("active");
    document.addEventListener("click", function (e) {
        if (
            !e.composedPath().includes(menuBtn) && 
            !e.composedPath().includes(navbar)
        ) {
            navbar.classList.remove("active");
        }
    })
})



// * Navbar

const home = document.querySelector(".n-home");
const sweatshirt = document.querySelector(".n-sweatshirt");
const tshirt = document.querySelector(".n-tshirt");
const about = document.querySelector(".n-about");
const comment = document.querySelector(".n-comment");
const contact = document.querySelector(".n-contact");
const blog = document.querySelector(".n-blog");



home.addEventListener("click", function(){
    home.classList.add("active");
    document.addEventListener("click", function(){
        debugger;
        if (
            sweatshirt.addEventListener("click")
            ) {
            
                home.classList.remove("active")
                sweatshirt.classList.add("active");
            }
    })
})


sweatshirt.addEventListener("click", function(){
    sweatshirt.classList.add("active");

})


tshirt.addEventListener("click", function(){
    tshirt.classList.add("active");

})


about.addEventListener("click", function(){
    about.classList.add("active");

})


comment.addEventListener("click", function(){
    comment.classList.add("active");

})


contact.addEventListener("click", function(){
    contact.classList.add("active");

})


blog.addEventListener("click", function(){
    blog.classList.add("active");

})

