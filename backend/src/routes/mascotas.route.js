const { Router } = require("express");
const mascotasCtrl = require("../controller/mascotas.controller");
const router = Router();
const mascotaCtrl = require("../controller/mascotas.controller");

router.post('/crear',mascotaCtrl.crear);
router.get('/listar',mascotaCtrl.listar)
router.delete('/eliminar/:id',mascotaCtrl.eliminar)
router.put('/actualizar/:id',mascotaCtrl.actualizar)

module.exports= router

