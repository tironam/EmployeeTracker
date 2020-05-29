const mysql = require('mysql2')
const { prompt } = require('inquirer')
const { promisify } = require('util')
const express = require('express')
const app = express()
const { join } = require('path')
const { Employee, Department, Role } = require('./controllers')



const db = require('./db')

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

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
                case 'View all employees':
                    viewEmployees()
                    break
                case 'View all roles':
                    viewRoles()
                    break
                case 'View all departments':
                    viewDepts()
                    break
                case 'Add Employee':
                    addEmployee()
                    break
            }
        })
}

choosePrompt()

let viewEmployees = () => {
        Employee.getEmployees()
        choosePrompt()
   }

app.listen(process.env.PORT || 3000, () => console.log('http://localhost:3000'))

