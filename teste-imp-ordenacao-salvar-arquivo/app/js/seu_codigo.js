$(document).ready(function() {
    var numberList = [];
  
    function addNumber() {
        //atraves do $('#number').val() pegamos o valor do campo onde possui o id de #number e fazemos o casting para INT
      var number = parseInt($('#number').val());
      numberList.push(number);
      // sort() é um método do JS que ordena os elementos de um array em determinada ordem 
      numberList.sort(function(a, b) {
        //se a é menor que b, = valor negativo 
        //se a é maior que b = valor positivo
        return a - b;
      });
      updateTable();
    }
  
    function updateTable() {
      $('#numbersTable').empty();
      for (var i = 0; i < numberList.length; i++) {
        $('#numbersTable').append('<tr><td>' + numberList[i] + '</td></tr>');
      }
    }

    function salvarNumeros() {
        // Converte o array de números em uma string JSON
        let numerosJSON = JSON.stringify(numberList);
      
        // Cria um novo blob com os dados da string JSON
        let blob = new Blob([numerosJSON], {type: "text/plain;charset=utf-8"});
      
        // Salva o blob em um arquivo .txt utilizando a biblioteca FileSaver.js
        saveAs(blob, "numeros.txt");
      }
    
    $('#saveNumberButton').click(salvarNumeros);
    $('#addNumberButton').click(addNumber);
  });