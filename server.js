const express = require('express')
const serveStatic = require('serve-static')
const pasth = require('path')

const app = express()

app.use('/', serveStatic(path.join(__dirname,'/dist')))

const port = process.env.port || 8080

app.listen(port)