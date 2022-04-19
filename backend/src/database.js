// establecemos la conexión con la bd 
// debemos tener en cuenta la dirección sea local o externa(servidor )


const mongoose = require('mongoose');
URL=('mongodb://localhost/bdMascotas');

// enviamos la conexión de la base de datos, establecemos unas configuracioes prederterminadas 

mongoose.connect(URL,{

useNewUrlParser: true,
useUnifiedTopology: true

// toman la dinamica para que la conexion se pueda establecer 
}).then(db => console.log('base de datos conectada',db.connection.name))
.catch(error=> console.log(error))
// con la promesa then se berifica que la promesa se cumpla 

// exportamos nuestro modulo a la db 
module.exports=mongoose