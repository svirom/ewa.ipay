$(document).ready(function() {

  // open modal on success submit form
  $('.btn-phone-edit').on('click', function(e) {
    e.preventDefault();

    $(this).prev('.form-group').hasClass('has-success') ? $('#phone-edit-modal').modal() : '';
  })

  // collapse phone edit form after success
  $('#phone-edit-modal').on('hide.bs.modal', function() {
    $(this).hasClass('phone-edit-modal--success') ? $('#phone-edit').collapse('toggle') : '';
  })

})