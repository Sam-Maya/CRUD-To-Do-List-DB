const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://127.0.0.1/toDoDB'

const app = express()
//connects to DB
mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection
//lets you know when connection is complete
con.on('open', () => {
  console.log('connected...')
})

app.use(express.json())

const listRouter = require('./routes/list')
app.use('/list', listRouter)

app.listen(8000, () =>{
  console.log('server started')
})