var basedatos = []


var limpiar = function(){

    document.getElementById('cedula').value = ""
    document.getElementById('nombres').value = ""
    document.getElementById('apellidos').value = ""
    document.getElementById('direccion').value = ""
    document.getElementById('telefono').value = ""
    document.getElementById('edad').value = ""
    document.getElementById('estadocivil').value = ""
}

var ClienteGuardar = function(){

    var cedula = document.getElementById('cedula').value
    var nombres = document.getElementById('nombres').value
    var apellidos = document.getElementById('apellidos').value
    var direccion = document.getElementById('direccion').value
    var telefono = document.getElementById('telefono').value
    var edad = document.getElementById('edad').value
    var estadocivil = document.getElementById('estadocivil').value

    
    
    // WARNING: For POST requests, body is set to null by browsers.
    var data = "cedula="+cedula+"&nombres="+nombres+"&apellidos="+apellidos+"&direccion="+direccion+"&telefono="+telefono+"&edad="+edad+"&estadocivil="+estadocivil+"";
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    
    xhr.addEventListener("readystatechange", function() {
        if(this.readyState === 4) {
            console.log(this.responseText);
        }

    });
    xhr.open("POST", "http://localhost:3000/Cliente/Guardar");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.send(data);



    basedatos.push({cedula:cedula,nombres:nombres,apellidos:apellidos,direccion:direccion,telefono:telefono,edad:edad,estdocivil:estadocivil});
    localStorage.setItem("base",JSON.stringify(basedatos));
    // var mensaje = document.getElementById('mensaje')
    // mensaje.innerHTML = "<div class='alert alert-success' role='alert'>Registro exito</div>"


    limpiar()
    

}

var ClienteListarCliente = function (){

  
// WARNING: For POST requests, body is set to null by browsers.
var data = "";


var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "http://localhost:3000/Cliente/ListarClientes");
console.log(data)
xhr.send(data);
console.log(ClienteListarCliente)




}
 


var ClienteModificar = function(){

    var cedula = document.getElementById('cedula').value ;
    var nombres = document.getElementById('nombres').value;
    var apellidos = document.getElementById('apellidos').value;
    var direccion = document.getElementById('direccion').value;
    var telefono = document.getElementById('telefono').value;
    var edad = document.getElementById('edad').value;
    var estadocivil = document.getElementById('estadocivil').value;

// WARNING: For POST requests, body is set to null by browsers.
var data = "cedula="+cedula+"&nombres="+nombres+"&apellidos="+apellidos+"&direccion="+direccion+"&telefono="+telefono+"&edad="+edad+"&estadocivil="+estadocivil+"";

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "http://localhost:3000/Cliente/Modificar");
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

xhr.send(data);

   
}

var ClienteEliminar = function(){

    var cedula = document.getElementById('cedula').value;

    // WARNING: For POST requests, body is set to null by browsers.
var data = "cedula="+cedula+"";

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
     console.log(this.responseText);
  }
});

xhr.open("POST", "http://localhost:3000/Cliente/Eliminar");
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

xhr.send(data);


}
