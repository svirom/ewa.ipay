$(document).ready(function() {

  $('.btn-delete').on('click', function() {
    var card = $(this).parent('.profile-card');

    var mask = card.find('.profile-card__mask-number').text();
    var name = card.find('.profile-card__name').text();
    var expiry = card.find('.profile-card__expiry').text();
    var logo = card.find('.profile-card__logo');
    var logoType = '';

    if ( $(logo).hasClass('logo-visa') ) {
      logoType = 'logo-visa';
    } else if ( $(logo).hasClass('logo-mastercard') ) {
      logoType = 'logo-mastercard';
    } else if ( $(logo).hasClass('logo-prostir') ) {
      logoType = 'logo-prostir';
    }

    // add info of current card to modal before open
    $('.delete-card.modal').on('show.bs.modal', function() {
      $(this).find('.profile-card__mask-number').text(mask);
      $(this).find('.profile-card__name').text(name);
      $(this).find('.profile-card__expiry').text(expiry);
      $(this).find('.profile-card__logo').addClass(logoType);
    })

    // remove info of current card from modal after close
    $('.delete-card.modal').on('hidden.bs.modal', function() {      
      $(this).find('.profile-card__mask-number').text('');
      $(this).find('.profile-card__name').text('');
      $(this).find('.profile-card__expiry').text('');
      $(this).find('.profile-card__logo').removeClass('logo-visa logo-mastercard logo-prostir');
      logoType = '';
    })
  })

})