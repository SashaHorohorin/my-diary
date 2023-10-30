const express = require('express')
require('dotenv').config()
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const postRouter = require('./routes/post.routes')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')

const PORT = process.env.PORT || 8080;

const  app = express()
app.use(cors({
    origin: ['http://localhost:3000']
}))
app.use(express.json())
app.use('/api', postRouter)

// =============================
app.use(errorHandler)

const start = async () => {
    try{
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e);
    }
}

start();