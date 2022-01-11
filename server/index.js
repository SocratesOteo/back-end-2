const express = require('express')
const cors = require('cors')
const houses  = require('./db.json')
const {getHouses,createHouse,deleteHouse } = require('./controller.js')


const app = express()
app.use(express.json)
app.use(cors())


app.get('/api/houses',getHouses)
app.post('/api/houses',createHouse)
app.delete('/api/houses/:id',deleteHouse)








app.listen(4004,()=>{
    console.log('port is online')
})