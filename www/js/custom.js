$(document).ready(function() {

  // prevent close dropdown menu after notification card or support card close (header notification, support)
  $(document).on('click', '.main-nav__notification .dropdown-menu, .main-nav__support .dropdown-menu', function (e) {
    e.stopPropagation();
  });

  // close support card (header support)
  $('.main-nav__support .support-card .close').click(function() {
    $('#dropdown-support').dropdown('toggle');
  })

})