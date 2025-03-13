// HEAD
setTimeout(() => {
    document.getElementById("imagem").style.opacity = "1";
}, 4000);

// BUTTON
window.addEventListener("scroll", function() {
    let button = document.getElementById("orcamento");

    if (window.scrollY > 50) {
        button.style.transform = "scale(0.8)"; // Diminui ao rolar a página
    } else {
        button.style.transform = "scale(1)"; // Tamanho normal ao topo
    }
});

// MENU & LOGO
window.addEventListener("scroll", function() {
    let header = document.getElementById("header");
    let logo = document.getElementById("logo");
    let hero = document.getElementById("hero");
    let button = document.getElementById("orcamento");
    let menu = document.getElementById("menu");

    if (window.scrollY > 100) {
        header.style.height = "25px";
        logo.style.width = "100px";
        logo.style.height = "92px";
        logo.style.transition = "all 0.5s ease-in-out";
        hero.style.opacity = "1";
        menu.style.opacity = "1";
        menu.style.visibility = "visible";
    } else {
        header.style.height = "100px";
        logo.style.width = "170px";
        logo.style.height = "166px";
        hero.style.opacity = "1";
        menu.style.opacity = "0";
        menu.style.visibility = "hidden";
    }
});
