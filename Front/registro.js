var basedatos = []

var GuardarUsuario = function(){
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var nacimiento = document.getElementById('nacimiento').value;
    var eleccion = document.getElementById('eleccion').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    basedatos.push({name:nombre,lastname:apellido,fecha:nacimiento,favorito:eleccion,mail:email,pass:password});
    localStorage.setItem("base",JSON.stringify(basedatos));
}

var cargardatos = function(){
    var misdatos = localStorage.getItem("base")
    if(misdatos == null){
        basedatos = []
    }
    else{ 
        basedatos = JSON.parse(misdatos)
    }
    
    var mensaje = document.getElementById('mensaje')
    if(posicion == -1){
        mensaje.innerHTML = "<div class='alert alert-danger' role='alert'>Registro invalido</div>"
    }
    else{
    mensaje.innerHTML = "<div class='alert alert-success' role='alert'>Registro exitoso"+ basedatos[posicion].name+"</div>"
}


}
cargardatos()