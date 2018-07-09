(function () {
  var afterRadio = document.querySelectorAll('.reviews-form__foto-controls-afterRadio');
  var inputRadio = document.querySelectorAll('.reviews-form__foto-controls-radioBtn');

  afterRadio[0].addEventListener('click', function(){
    inputRadio[0].checked = !inputRadio[0].checked;
  });
  afterRadio[1].addEventListener('click', function () {
    inputRadio[1].checked = !inputRadio[1].checked;
  });
})();