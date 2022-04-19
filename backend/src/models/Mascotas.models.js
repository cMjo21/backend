//? establecemos el esquema con que vamos a trabajar 
//const {default:mongoose,Schema} =require("mongoose")
// ojo: debemos primiro requerir mongoose y luego declarar el esquema 
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const MascotasSchema = new Schema({

    NombredeMascota:{type: String,required:[true,'Nombre obligatorio']},
    TipodeMascota:{type: String,required:[true,' Tipo obligatorio']},
    Raza :{type: String,required:[true,' Raza obligatorio']},
    Edad : Number,
    EstadodeVacuna :{type: String,required:[true, 'si'||false, 'no']},
    NombredelDueño:{type: String,required:[true,'Nombre obligatorio']},
    CeduladelDueño: String,
    date:{ type: Date,default:Date.now}
})

// convertitt a modelo 
module.exports = mongoose.model("mascototas",MascotasSchema)