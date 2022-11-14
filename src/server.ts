import express from 'express'
import mongoose from 'mongoose'

const server = express()
const database = mongoose.connect('mongodb://joao:teste@localhost:27017/admin')

server.listen(3000)


