require('dotenv').config()

const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
const router = require('./routes')
const errorMiddleware = require('./middleware/error.middleware')

const PORT = process.env.PORT || 3003
const DB_URL = process.env.DEV_URL

const app = express()
app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use('/api', router)
app.use(errorMiddleware)

const start = async () => {
  try {
    await mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      useFindAndModify: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    })

    app.listen(PORT, () => {
      console.log(
          '\x1b[34m%s\x1b[0m',
          `
                    ${app.get('env').toUpperCase()}
                    Port:       ${PORT}
                    Rest:       http://localhost:${PORT}/api/
                    Database:   ${mongoose.connection.host}/${mongoose.connection.name}                          
                `
      )
    })
  } catch (error) {
    console.log('Server error', error.message)
    process.exit(1)
  }
}

start()
