const express =require ("express")

const app=express()

const DB=require('./config/bd')
DB()
app.use(express.json())
const cors = require('cors')
app.use(cors())

const PORT =process.env.PORT || '8000'

const Router=require('./Rooter/rooter')

app.use('/app',Router)

app.listen(PORT,(err)=>{
    if(err){
        console.log('server is not running')
    }
    else {
        console.log(`server is running on port ${PORT}` )
    }
})
