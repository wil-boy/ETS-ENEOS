// navvbar /////////////////////////////
var nav = document.querySelector('nav');

window.addEventListener('scroll', function () {
  if (window.pageYOffset > 100) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

$(document).ready(function() {
  // Initialize Swiper
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 5000, // Delay in milliseconds (5 seconds)
      disableOnInteraction: false, // Autoplay won't be disabled after user interactions
    },
  });

  // Initialize tooltips
  $('[data-toggle="tooltip"]').tooltip();

  // Form submission handling
  $('#myForm').on('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    var form = $(this);
    var formData = form.serialize(); // Serialize form data

    $.ajax({
      url: form.attr('action'), // Formspree endpoint
      method: 'POST',
      data: formData,
      headers: {
        'Accept': 'application/json' // Required by Formspree
      },
      success: function(response) {
        console.log('Success:', response); // Debugging
        $('#success-message').show();
        $('#error-message').hide();
        form.trigger('reset'); // Clear the form
      },
      error: function(xhr, status, error) {
        console.error('Error:', xhr.responseText); // Debugging
        $('#error-message').show();
        $('#success-message').hide();
      }
    });
  });
});