import {Request,Response} from 'express'
import carModels from '../database/carModels'

const carroController = {
    async index(req: Request,res: Response): Promise<Response>{
        let cars = await carModels.find()
        return res.json(cars)
    },

    async acharCarroPorId (req:Request,res:Response): Promise<Response>{
        const {id} = req.params
       let carros =  await carModels.findById(id)
       return res.json(carros)
    },

    async criarCarro (req:Request,res:Response): Promise<Response>{
        const {
            marca,
            modelo,
            versao,
            ano,
            quilometragem,
            tipoCambio,
            precoVenda
               } = req.body

            let car = await carModels.create(req.body)
            return res.json(car)
    },

    async atualizarCarro(req:Request,res:Response): Promise <Response>{
        const idCar = req.params
        //const carroParaAlterar = carModels.findById(idCar)
        const carroAlterar = req.body
        const carrrr = await carModels.findOneAndUpdate(idCar,req.body)
        return res.json(carroAlterar)
    },

    async deletarCarro (req:Request,res:Response): Promise<Response>{
        const idDelete = req.params
          await carModels.findOneAndDelete(idDelete)
         return res.json('Sucesso')
    }

}

export default carroController