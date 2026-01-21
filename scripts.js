let prevButton = document.getElementById("prev");
let nextButton = document.getElementById("next");
let container = document.querySelector(".container");
let items = container.querySelectorAll(".list .item");
let indicator = document.querySelector(".indicators");
let dots = indicator.querySelectorAll("ul li");
let list = container.querySelector(".list");
let active = 0;
let lastPosition = items.length - 1;

// Variável para o temporizador automático
let autoSlideInterval;

// Função para atualizar o slider
function setSlider() {
    let itemOld = container.querySelector(".list .item.active");
    if (itemOld) itemOld.classList.remove("active");
    let dotsOld = indicator.querySelector("ul li.active");
    if (dotsOld) dotsOld.classList.remove("active");

    items[active].classList.add("active");
    dots[active].classList.add("active");

    indicator.querySelector(".number").innerHTML = "0" + (active + 1);

    // Reinicia o temporizador automático sempre que o slide muda
    resetAutoSlide();
}

// Evento para o botão Próximo
nextButton.onclick = () => {
    active = active + 1 > lastPosition ? 0 : active + 1;
    setSlider();
};

// Evento para o botão Anterior
prevButton.onclick = () => {
    active = active - 1 < 0 ? lastPosition : active - 1;
    setSlider();
};

// Adiciona navegação clicável nos dots
dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        active = index;
        setSlider();
    });
});

// Implementa a navegação automática a cada 5 segundos
function autoSlide() {
    autoSlideInterval = setInterval(() => {
        nextButton.click(); // Simula um clique no botão "próximo"
    }, 5000); // Muda a cada 5 segundos
}

// Função para reiniciar o temporizador
function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlide();
}

// Adiciona pausa na navegação automática quando o mouse passa por cima
container.addEventListener("mouseenter", () =>
    clearInterval(autoSlideInterval),
);
container.addEventListener("mouseleave", resetAutoSlide);

// Inicializa o slider na primeira carga e começa a navegação automática
setSlider();
autoSlide();
