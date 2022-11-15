import {mongo, Schema} from 'mongoose'
import mongoose from 'mongoose'

const carModel = new Schema({
        marca:String,
        modelo:String,
        versao:String,
        ano:Number,
        quilometragem:Number,
        tipoCambio:String,
        precoVenda:Number
},{timestamps:true})

export default mongoose.model('Carro',carModel)