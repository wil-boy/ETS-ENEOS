// navvbar /////////////////////////////
var nav = document.querySelector('nav');

window.addEventListener('scroll', function () {
  if (window.pageYOffset > 100) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});
//===========navbar end///////////
//////////////////////////////////////////////////////////////
 // Initialize the testimonial slider
 $(document).ready(function(){
  $('#testimonialCarousel').carousel({
      interval: 10000
  });
});