const express = require('express')
const path = require('path')
const app = express()
const api = require('./routes/api')
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname,"..", 'dist')))
app.use(express.static(path.join(__dirname,"..", 'node_modules')))
app.use('/', api)








app.listen(8080, () => console.log(`Server is up and running smoothly`))