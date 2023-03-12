$(document).ready(function() {
    $('form').submit(function(event) {
        // o e.preventDefault é usado pra impedir o comportamento do navegador em determinado exemplo
        //por exemplo, se aqui ficasse sem isso, a pagina daria um "reload" ao dar um submit no numero e a tabuada
        //ficaria visivel por apenas milesimos de segundo
      event.preventDefault();
      var number = $('#inputNumber').val();
      var multiplication  = '';
  
      for (var i = 1; i <= 10; i++) {
        multiplication  += number + ' x ' + i + ' = ' + (number * i) + '<br>';
      }
  
      $('#resultMultiplication').html(multiplication);
    });
  });