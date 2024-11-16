//radapé
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

//SLIDES
// Inicializa o índice do slide para o primeiro slide
let slideIndex = 1;
showSlides(slideIndex);

// Função para avançar ou retroceder os slides
function plusSlides(n) {
  showSlides(slideIndex += n); // Aumenta ou diminui o índice do slide
}

// Função para ir diretamente para um slide específico ao clicar no ponto
function currentSlide(n) {
  showSlides(slideIndex = n); // Define o índice do slide diretamente
}

// Função para mostrar o slide baseado no índice atual
function showSlides(n) {
  let i;
  // Obtém todos os elementos com a classe "mySlides" (os slides)
  let slides = document.getElementsByClassName("slides");
  // Obtém todos os pontos de navegação
  let dots = document.getElementsByClassName("bolinha");

  // Se o número do slide for maior que o número de slides, volta para o primeiro
  if (n > slides.length) {slideIndex = 1}    
  // Se o número do slide for menor que 1, vai para o último slide
  if (n < 1) {slideIndex = slides.length}

  // Esconde todos os slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  // Remove a classe "active" de todos os pontos de navegação
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Exibe o slide correspondente ao índice atual
  slides[slideIndex-1].style.display = "block";  

  // Adiciona a classe "active" ao ponto correspondente ao slide atual
  dots[slideIndex-1].className += " active";
}
