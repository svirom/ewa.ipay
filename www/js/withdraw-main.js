$(document).ready(function() {

  // keep at least one collapsing panel open (radio buttons)
  $('.withdraw-form__method [data-toggle="collapse"]').on('click',function(e) {
    if ( $(this).parents('.withdraw-form__method').find('.collapse.show') ) {
      var idx = $(this).index('[data-toggle="collapse"]');
      if (idx == $('.collapse.show').index('.collapse')) {
        e.stopPropagation();
      }
    }
  });

})