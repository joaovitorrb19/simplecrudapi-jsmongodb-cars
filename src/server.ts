import express from 'express'
import mongoose from 'mongoose'
import router from './router'

const server = express()
const database = mongoose.connect('mongodb://joao:teste@localhost:27017/admin')
.then((data)=>{
    console.log('Conectou com sucesso ao mongodb!')
})
.catch((err) => {
    console.log('erro ao connectar com o banco:' , err.message)
})


server.use(router)
server.use(express.json)

server.listen(3000)


