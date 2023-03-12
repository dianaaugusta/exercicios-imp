$(document).ready(function() {
    $("#getCEPButton").click(function() {
      let cep = $("#cepInput").val();
  
      //CEP tem 8 caracteres?
      if (cep.length !== 8) {
        alert("CEP inválido.");
        return;
      }
  
      // requisição  para o webservice dos Correios
      $.ajax({
        url: "https://apps.correios.com.br/SigepMasterJPA/AtendeClienteService/AtendeCliente",
        type: "POST",
        data: {cep: cep},
        dataType: "xml",
        success: function(response) {
          // find() -  busca um elemento dentro do XML. 
          // <return> do XML.
          let address = $(response).find("return").text();
  
          // exibe o endereco na div de id #endereco
          $("#address").html("<p>" + address + "</p>");
        },
        error: function() {
          alert("ERRO DE CORS");
        }
      });
    });
  });