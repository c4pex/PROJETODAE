window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY; // Distância rolada da parte superior
    const yellowBar = document.querySelector(".yellow-bar");
  
    // Ajusta a altura da barra amarela com base na rolagem
    yellowBar.style.height = `${scrollTop}px`;
  });