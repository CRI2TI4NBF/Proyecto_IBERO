var express = require('express')
global.app = express()
global.datos = [];
var bodyparse = require('body-parser')
app.use(bodyparse.json())
app.use(bodyparse.urlencoded({extended:true}))
// global.config = require(__dirname + '/config.js').config



app.all('*',function(request,response,next){ 
    var whitelist = request.headers.origin;
 
    response.header('Access-Control-Allow-Origin', whitelist) 
    //response.header('Access-Control -Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS,HEAD'); 
    //response.header('Access-Control-Allow-Headers', "authorization, Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"); 
    response.header("Access-Control-Allow-Credentials", "true"); 
    
    next() 
})

    var cors = require('cors');// cross origin resource sharing
     

    app.use(cors({
    origin:function(origin,callback){
        console.log(origin)
        if(!origin)return callback(null,true)
        var listablanca = [
            'http://127.0.0.1:5500',
        ]
        if(listablanca.indexOf(origin) === -1){
            return callback('Error cors',false)
        }
        return callback(null,true)
            
        // if(config.listablanca.indexOf(origin) === -1){
        //     return callback('Error cors',false)
        // }
        // return callback(null,true)

    }
   
}))

require(__dirname + "/routes.js")




app.listen(3000, function(){
    console.log('servidor funcionando por el puerto:' + 3000)

})





