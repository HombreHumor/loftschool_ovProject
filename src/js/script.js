(function () {
  var afterRadio = document.querySelectorAll('.reviews-form__foto-controls-after-radio');
  var inputRadio = document.querySelectorAll('.reviews-form__foto-controls-radio-btn');

  afterRadio[0].addEventListener('click', function(){
    inputRadio[0].checked = !inputRadio[0].checked;
  });
  afterRadio[1].addEventListener('click', function () {
    inputRadio[1].checked = !inputRadio[1].checked;
  });
})();