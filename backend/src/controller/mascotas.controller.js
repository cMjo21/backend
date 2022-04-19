const mascotasCtrl = {};
const mascota = require('../models/Mascotas.models');
// aqui estamos realizando nuestra primera peticion post porque estoy creando la petición, esta se va encargar de enviar la información que requerimos. 

mascotasCtrl.crear= async(req,res)=>{
 const{
    NombredeMascota,TipodeMascota,Raza,Edad,EstadodeVacuna,NombredelDueño,
    CeduladelDueño}=req.body
const nuevaMascota = new mascota({ 
    NombredeMascota,
    TipodeMascota,
    Raza,
    Edad,
    EstadodeVacuna,
    NombredelDueño,
    CeduladelDueño}) 
// aqui evaluamos la respuesta si es ok nos va a retornar un mensaje positivo. 
    const respuesta = await nuevaMascota.save()
    res.json({
        mensaje:'mascota creada ',
        respuesta
    })
}
// obtener todos los registros petición get  
mascotasCtrl.listar = async(req,res)=>{
    const respuesta  = await mascota.find()
    res.json(respuesta)
}

// eliminar utilizando el id 
mascotasCtrl.eliminar= async(req,res)=>{

const id = req.params.id // parametro de id 
 await mascota.findByIdAndRemove({_id:id})// parametro que vamos a eliminar 
 res.json({ mensaje: "mascota eliminada"})

}

mascotasCtrl.actualizar = async(req,res)=>{
  const id = req.params.id
  await mascota.findByIdAndUpdate({_id:id},req.body)
  res.json({ mensaje:"mascota actualizada"})


}


module.exports=mascotasCtrl




