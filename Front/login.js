var basedatos = []

var GuardarUsuario = function(){
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    basedatos.push({mail:email,pass:password});
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
}
    var IniciarSesion = function(){
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;

        var posicion = basedatos.findIndex((item) => item.mail == email && item.pass ==password) 

        var mensaj = document.getElementById('mensaje')
        if(posicion == -1){
        mensaj.innerHTML = "<div class='alert alert-danger' role='alert'>Invalidas</div>"
        }
        else{
            mensaj.innerHTML = "<div class='alert alert-success' role='alert'>Bienviendo"+ basedatos[posicion].name +"</div>"
        }


    }


cargardatos()