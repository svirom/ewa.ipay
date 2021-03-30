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

})