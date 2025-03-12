import express from 'express'
import shorterRoute from './routes/shorter.route.js'

const app = express()
const PORT = process.env.PORT

app.use(express.json())
app.use('/api', shorterRoute)

app.listen(PORT, () => {
    console.log(`api rodando em ${process.env.PORT}`)
})