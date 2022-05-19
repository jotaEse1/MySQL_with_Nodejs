const express = require('express');
const app = express()
const {connection} = require('./db');

connection.connect(err => {
    if(err) throw err
    console.log('Connected to db')
})

//routes
const root = require('./routes/root')

//middlewares
app.use(express.json())

app.get('/', (req, res) => {
    res.send(`$hELOO`)
})

app.use('/crud', root)


app.listen('5000', (req, res) => {
    console.log('Server is running on port 5000....')
})