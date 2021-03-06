const cors = require('cors')
const createError = require('http-errors')
const express = require('express')
const bodyParser = require('body-parser')
const gradient = require('gradient-string')
const morgan = require('morgan')

const routes = require('./routes')
const { port } = require('./config')

const api = express()

if (api.get('env') === 'development') {
  api.use(morgan('dev'))
}

api.use(cors())
api.use(bodyParser.json())
api.use(bodyParser.urlencoded({ extended: true }))
api.use('/', routes)
api.use((req, res) => res.status(405).json(createError(405)))
api.listen(port)
console.log(gradient.summer(`Accounting notebook's API listening on port ${port}`))
