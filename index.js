const express = require('express');
const app = express()
const conversionsRouter = require('./v1/conversions')
const cors = require('cors')
const logger = require('./middlewares/logger')
const connectMongo = require('./middlewares/connectMongo')

app.use(logger)
app.use(connectMongo)
app.use(cors())
app.use(express.json())



app.use('/api',conversionsRouter)


const PORT = process.env.PORT || 3001;
app.listen(PORT,()=>{
    console.log('server ' + PORT)
})