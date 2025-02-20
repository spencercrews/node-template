import express from 'express'
import dotenv from 'dotenv'

dotenv.config()
const app = express()
//const router = express.Router()

// app.use('/', router)
app.get('/', (req,res) =>{
    const rnum = Math.random()
    console.log(rnum)
    res.send(`Hello World ${rnum}`)
})

app.listen(process.env.PORT, ()=>{
    console.log(`app listening on port ${process.env.PORT}`)
})
export default app
/*
Express Server setup
*/