const mysql = require('mysql2')
const { prompt } = require('inquirer')
const { promisify } = require('util')
const express = require('express')
const app = express()

app.use(express.static(join(__dirname, 'public')))
app.use(expres.urlencoded({ extended: true }))
app.use(express.json())

app.listen(process.env.PORT || 3000, () => console.log('http://localhost:3000'))

