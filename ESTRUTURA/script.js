setTimeout(() => {
    document.getElementById("imagem").style.opacity = "1";
}, 4000);

window.addEventListener("scroll", function() {
    let header = document.getElementById("header");
    let logo = document.getElementById("logo");
    let hero = document.getElementById("hero");

    if (window.scrollY > 10) {
        header.style.height = "100px";
        logo.style.width = "100px";
        logo.style.height = "100px";
        hero.style.opacity = "0";
        hero.style.transition = "opacity 1s ease-in-out";
    } else {
        header.style.height = "100px";
        logo.style.width = "200px";
        logo.style.height = "200px";
        hero.style.opacity = "1";
    }
});