// function sum(){
// debugger;
//   var numero1 = parseInt(document.getElementById("dato1").value);
//     var numero2 = parseInt(document.getElementById("dato2").value);
//     var resultado = numero1 + numero2;

//     document.getElementById("resultado").value=resultado;
// }

function operacion(operacion){
// debugger;

  var tipooperacion=operacion;
  if(tipooperacion=="suma"){
  var numero1 = parseInt(document.getElementById("dato1").value);
  var numero2 = parseInt(document.getElementById("dato2").value);
  var resultado = numero1 + numero2;

  document.getElementById("resultado").value=resultado;
  }
//  debugger;
  var tipooperacion=operacion;
  if(tipooperacion=="resta"){
    var numero1 = parseInt(document.getElementById("dato1").value);
    var numero2 = parseInt(document.getElementById("dato2").value);
    var resultado = numero1 - numero2;

    document.getElementById("resultado").value=resultado;
  }
    // debugger;
    var tipooperacion=operacion;
    if(tipooperacion=="division"){
      var numero1 = parseInt(document.getElementById("dato1").value);
      var numero2 = parseInt(document.getElementById("dato2").value);
      var resultado = numero1 / numero2;
    }
      document.getElementById("resultado").value=resultado;
    
    
      // debugger;
      var tipooperacion=operacion;
      if(tipooperacion=="multiplicacion"){
        var numero1 = parseInt(document.getElementById("dato1").value);
        var numero2 = parseInt(document.getElementById("dato2").value);
        var resultado = numero1 * numero2;
    
        document.getElementById("resultado").value=resultado;
      } 
      
}

function limpiar(){
  document.getElementById("dato1").value="";
  document.getElementById("dato2").value="";
  document.getElementById("resultado").value="";
}
