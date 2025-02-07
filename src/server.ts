import express from 'express'
import dotenv from 'dotenv'

dotenv.config()
const app = express()
//const router = express.Router()

// app.use('/', router)
app.get('/', (req,res) =>{
    res.send(`Hello World ${Math.random()}`)
})

app.listen(process.env.PORT, ()=>{
    console.log(`app listening on port ${process.env.PORT}`)
})
export default app
/*
Express Server setup
*/