$(document).ready(function() {

  // mobile menu
  $('[data-trigger]').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    var mobileId =  $(this).attr('data-trigger');
    $(mobileId).toggleClass('show');
    $('body').toggleClass('overflow-hidden');
    $('.mobile-overlay').toggleClass('show');
  }); 

  $('.mobile-menu .close, .mobile-overlay').click(function() {
    $('.mobile-overlay').removeClass('show');
    $('.mobile-menu').removeClass('show');
    $('body').removeClass('overflow-hidden');
  });

  // scroll to anchor
  $('a').click(function(e) {
    if ($(this).data('scroll') == 'anchor') {
      e.preventDefault();

      var anchor = $(this).attr('href');

      $('html, body').animate({scrollTop: $(anchor).offset().top}, 600);
    }
  });

})