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
});

// ! search global section start 
let search_section = document.querySelector(".search-area-section");
let search_button  = document.querySelector(".nav-button");

search_button.addEventListener("click", () => {
    search_section.classList.toggle('search-area-section-disable');
    

    if (search_section.classList.contains("search-area-section-disable")) {
        search_button.innerHTML = '<i class="fa-solid fa-magnifying-glass fa-xl">';
    }
    else {
        search_button.innerHTML = '<i class="fa-solid fa-x fa-sm"></i>';
    }   
});




