import app from '../server'
import helloRouter from './get'

app.use('/Hello', helloRouter)
