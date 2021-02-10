const mongoose = require('mongoose')
const promise = require('../../../playground/promise-chaining')


mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useNewUrlParser: true, 
    useCreateIndex: true,
    useUnifiedTopology: true
})
const db = mongoose.connection


db.on('error', console.error.bind(console, '---- connection error: ----  '))
db.once('open', () => {
    console.log('We are connected to database')
})  