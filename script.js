let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Inicializa o carrossel na primeira imagem
showSlide(currentIndex);

// Função para adicionar eventos de toque
function addTouchEvents() {
    const carousel = document.querySelector('.carousel-inner');
    let startX, currentX, diffX, isDragging = false;

    carousel.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        isDragging = true;
    });

    carousel.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        currentX = e.touches[0].clientX;
        diffX = currentX - startX;
        carousel.style.transform = `translateX(${diffX}px)`;
    });

    carousel.addEventListener('touchend', (e) => {
        isDragging = false;
        const threshold = 100; // Valor em pixels para considerar um swipe
        if (Math.abs(diffX) > threshold) {
            if (diffX > 0) {
                // Swipe para a direita
                prevSlide();
            } else {
                // Swipe para a esquerda
                nextSlide();
            }
        }
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    });
}

// Verifica a largura da tela e adiciona eventos de toque se for responsivo
function checkResponsive() {
    if (window.innerWidth <= 465) {
        addTouchEvents();
    }
}

// Chama a função ao carregar a página e ao redimensionar a janela
window.addEventListener('load', checkResponsive);
window.addEventListener('resize', checkResponsive);

//------------------

function copyEmail() {
    const emailInput = document.getElementById('emailInput');
    emailInput.select();
    emailInput.setSelectionRange(0, 99999); // Para dispositivos móveis
    document.execCommand('copy');
    alert('Email copiado: ' + emailInput.value);
}

function initScrollAnimations() {
    const elementsToAnimate = document.querySelectorAll('.animate-from-right, .animate-from-left, .animate-from-top, .animate-from-bottom');
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
  
    elementsToAnimate.forEach(element => {
      observer.observe(element);
    });
  }
  const openAndCloseMenu = document.getElementById("openAndCloseMenu")

  openAndCloseMenu.addEventListener('click', ()=>{
    document.getElementById("menu").classList.toggle("displaynone")
  })
