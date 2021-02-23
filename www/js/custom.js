$(document).ready(function() {

  // prevent close dropdown menu after notification card or support card close (header notification, support)
  $(document).on('click', '.main-nav__notification .dropdown-menu, .main-nav__support .dropdown-menu', function (e) {
    e.stopPropagation();
  });

  // close support card (header support)
  $('.main-nav__support .support-card .close').click(function() {
    $('#dropdown-support').dropdown('toggle');
  })

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

  // back-to-top
  $('#back-to-top').click(function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop: 0}, 600);
 });

})