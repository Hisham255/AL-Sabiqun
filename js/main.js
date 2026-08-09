// ! navbar global section menu start



let nav = document.querySelector(".nav-list");
let menu_button = document.querySelector(".nav-menu");

menu_button.addEventListener("click", () => {
    nav.classList.toggle('show-menu');
    

    if (nav.classList.contains("show-menu")) {
        menu_button.innerHTML = '<i class="fa-solid fa-x fa-sm"></i>';
    }
    else {
        menu_button.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }   
})




