const mysql = require('mysql2')
const { prompt } = require('inquirer')
const { promisify } = require('util')
const express = require('express')
const app = express()

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'rootroot',
    database: 'work_db'
})

let choosePrompt = () => {
    prompt([
        {
            type: 'list',
            name: 'prompt',
            message: 'What would you like to do?',
            choices: ['View all employees', 'View all roles', 'View all departments', 'Add employee', 'Update employee role']
        }
    ])
    .then(({ choice }) => {
        switch(choice) {
            
        }
    })
}

app.use(express.static(join(__dirname, 'public')))
app.use(expres.urlencoded({ extended: true }))
app.use(express.json())

app.listen(process.env.PORT || 3000, () => console.log('http://localhost:3000'))

