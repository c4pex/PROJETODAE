// HEAD
setTimeout(() => {
    document.getElementById("imagem").style.opacity = "1";
}, 4000);

// BUTTON
window.addEventListener("scroll", function() {
    let button = document.getElementById("orcamento");

    if (window.scrollY > 50) {
        button.style.display = "block";
        button.style.opacity = "1";
    } else {
        button.style.opacity = "1";
        setTimeout(() => { button.style.display = "none"; }, 500);
    }
});

// MENU
window.addEventListener("scroll", function() {
    let header = document.getElementById("header");
    let logo = document.getElementById("logo");
    let hero = document.getElementById("hero");
    let button = document.getElementById("orcamento");
    
    if (window.scrollY > 100) {
        header.style.height = "25px";
        logo.style.width = "100px";
        logo.style.height = "92px";
        hero.style.opacity = "1";
        hero.style.transition = "opacity 1s ease-in-out";
        button.style.display = "block";
        button.style.opacity = "1";
        menu.style.opacity = "1";
        menu.style.visibility = "visible";
    } else {
        header.style.height = "100px";
        logo.style.width = "170px";
        logo.style.height = "166px";
        hero.style.opacity = "1";
        button.style.opacity = "0";
        setTimeout(() => { button.style.display = "none"; }, 500);
        menu.style.opacity = "0";
        menu.style.visibility = "hidden";
    }
});