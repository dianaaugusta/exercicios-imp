$(document).ready(function() {
    $("#verificar").click(function() {
      var number = $("#numberInput").val();
      if (number <= 0) {
        alert("DIGITE UM number POSITIVO");
        return;
      }
      var sum = 0;
      for (var i = 1; i < number; i++) {
        if (number % i == 0) {
          sum += i;
        }
      }
      if (sum == number) {
        $("#result").html("<div class='alert alert-success'>" + number + " é perfeito</div>");
      } else {
        $("#result").html("<div class='alert alert-danger'>" + number + " não é perfeito</div>");
      }
    });
  });