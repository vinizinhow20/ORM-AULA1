import 'dotenv/config'
import express from 'express'
import routes from './controllers/routes'

const app = express()

app.use(express.json())

app.use(routes)

app.listen(process.env.PORT,() => {
    console.log('Server Started!')
})