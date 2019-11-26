require('dotenv').config()
const massive = require('massive')
const express = require('express')
const {SERVER_PORT, DB_CONNECTION_URI} = process.env
const ctrl = require('./controller')
const app = express()


app.use(express.json())

app.get('/api/inventory', ctrl.getInventory)
// app.post('/api/jokes', ctrl.keep)
// app.put('/api/jokes/:id', ctrl.name)
// app.delete('/api/jokes/:id', ctrl.trash)
massive(DB_CONNECTION_URI).then(databaseConnection => {
    app.set('db', databaseConnection)
    console.log('Database connected')
    app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} is this working??`))
})