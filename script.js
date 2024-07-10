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
  