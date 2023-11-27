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
  
    $('#searchBtn').click(function() {
      var searchTerm = $('#searchInput').val().toLowerCase();
      filterSlides(searchTerm);
    });
  
    function updateCarousel() {
      var translateValue = -currentIndex * 100 + '%';
      $('.carousel-wrapper').css('transform', 'translateX(' + translateValue + ')');
    }
  
    function filterSlides(term) {
      $('.carousel-slide').each(function() {
        var slideData = $(this).data('search').toLowerCase();
        if (slideData.includes(term) || term === '') {
          $(this).show();
        } else {
          $(this).hide();
        }
      });
    }
  });
  
  