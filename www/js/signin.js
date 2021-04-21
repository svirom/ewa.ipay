$(document).ready(function() {

  // change submit color if checked (page loaded)
  if ($('.signin-form__form--oferta [type="checkbox"]').is(':checked')) {
    $('.signin-form__form--oferta').find('[type="submit"]').addClass('active');
  } else {
    $('.signin-form__form--oferta').find('[type="submit"]').removeClass('active');
  }

  // change submit color on checked
  $('.signin-form__form--oferta [type="checkbox"]').on('change', function() {
    if ($(this).is(':checked')) {
      $(this).parents('.signin-form__form--oferta').find('[type="submit"]').addClass('active');
    } else {
      $(this).parents('.signin-form__form--oferta').find('[type="submit"]').removeClass('active');
    }
  })

  // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
  var vh = window.innerHeight * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  // We listen to the resize event
  window.addEventListener('resize', function() {
    // We execute the same script as before
    var vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });

})