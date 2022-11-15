import express from 'express'
import carroController from '../controllers/carroController'

const router = express.Router()

router.get('/carros',carroController.index)
router.get('/carro/:id',carroController.acharCarroPorId)
router.post('/criarCarro',carroController.criarCarro)
router.put('/editarCarro/:id',carroController.atualizarCarro)
router.delete('/deletarCarro/:id',carroController.deletarCarro)

export default router
