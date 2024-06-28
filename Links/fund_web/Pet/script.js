$(document).ready(function() {
    var currentIndex = 0;
    var slideCount = $('.carousel-slide').length;
  
    $('.next-btn').click(function() {
      if (currentIndex < slideCount - 1) {
        currentIndex++;
      } else {
        currentIndex = 0;
      }
      updateCarousel();
    });
  
    $('.prev-btn').click(function() {
      if (currentIndex > 0) {
        currentIndex--;
      } else {
        currentIndex = slideCount - 1;
      }
      updateCarousel();
    });
  
    function updateCarousel() {
      var translateValue = -currentIndex * 100 + '%';
      $('.carousel-wrapper').css('transform', 'translateX(' + translateValue + ')');
    }
  });
