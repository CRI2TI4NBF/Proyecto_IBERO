var usuariosModel = {}


usuariosModel.Guardar = function(post,callback){

    datos.push({
        
        cedula:post.cedula,
        nombres:post.nombres,
        apellidos:post.apellidos,
        direccion:post.direccion,
        telefono:post.telefono,
        edad:post.edad,
        estadocivil:post.estadocivil

    })
    return callback({state:true,mensaje:"Usuario Guardado"})
}

usuariosModel.ListarClientes = function(post,callback){
    return callback({state:true,datos:datos})
}

usuariosModel.Modificar = function(post,callback){
    
    datos[post.posicion].nombres = post.nombres
    datos[post.posicion].apellidos = post.apellidos
    datos[post.posicion].direccion = post.direccion
    datos[post.posicion].telefono = post.telefono
    datos[post.posicion].edad = post.edad
    datos[post.posicion].estadocivil = post.estadocivil

    return callback({state:true,mensaje:"Sea Modificico Correctamente"})
}

usuariosModel.Eliminar = function(posicion,callback){
    datos.splice(posicion,1)
     return callback({state:true,mensaje:"Eliminacion de Forma Exitosa"})
}





module.exports.usuarios = usuariosModel