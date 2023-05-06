const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
      
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  
      autoplay: {
        delay: 5000,
      }
  });
  
  $( ".open-close-btn" ).on('click touchstart', function(e) {
    // prevent default anchor click 
    e.preventDefault();
    $(".overlay").toggleClass("overlay-open");
    $("#hamburger-icon").toggleClass("hamburger-open");
  });