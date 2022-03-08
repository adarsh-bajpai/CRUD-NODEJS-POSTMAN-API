const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const router = require('./Routes/routes')

const app = express()

mongoose.connect('mongodb://localhost:27017/CRUD', { useNewUrlParser: true, useUnifiedTopology: true } )
const db = mongoose.connection

// ! IF Error This code will Handle the Error !!
db.on('error', () => {
    console.log('Opps! You have missed something!', error)
})

// * IF Code Excuted if the datebase is connected !!

db.once('open', () => {
    console.log(`Congrats! Database is working well !!!`)
})

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


app.use(router)

let PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`Server is Running on PORT - ${PORT}`)
})

