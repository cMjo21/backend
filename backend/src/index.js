// aqui se requieren los modulos necesarios 
const express = require("express");
const app = express(); 
const morgan = require("morgan");
const cors= require("cors"); 
const bodyParser = require("body-parser"); 
const { Console } = require('console')
// aqui vamos a requerir  la base de datos 
require('./database')
// vamos a configurar el puerto que vamos a escuchar 

app.set('Port', process.env.PORT || 3000) // optiene el puerto que le estan otorgando del servidor externo de lo contrario cambia al puerto 3000 
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors({origen:'*'}));// establece la comunicación 
// aqui vamos a utilizar las rutas  

app.use('/mascota',require('./routes/mascotas.route'));

// aqui vams a  escuchar nuestro puerto 

app.listen(app.get('Port'),()=>{ console.log("El servidor esta escuchando por el puerto",app.get('Port'))})









