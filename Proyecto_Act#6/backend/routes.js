var usuariosController = require(__dirname + '/controladores/usuariosController.js').usuarios


// var datos = [];

app.post("/Cliente/Guardar",function(request,response){
    usuariosController.Guardar(request,response)
})

app.post("/Cliente/ListarClientes",function(request,response){
   usuariosController.ListarClientes(request,response)
})

app.post("/Cliente/Modificar",function(request,response){
    usuariosController.Modificar(request,response)
})

app.post("/Cliente/Eliminar",function(request,response){

   usuariosController.Eliminar(request,response)

})
