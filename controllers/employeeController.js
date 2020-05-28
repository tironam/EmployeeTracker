const orm = require('../db')

module.exports = {
    getEmployees (cb) {
        orm.getAll('employees', employees => cb(employees))
    },
    getEmployeesWhere (where, cb) {
        orm.getAllWhere('employees', where, employees => cb(employees))
    },
    addEmployee (employee, cb) {
        orm.createOne('employees', employee, info => cb(info))
    },
    updateEmployee (changes, where, cb) {
        orm.updateOne('employees', changes, where, info => cb(info))
    },
    deleteEmployee (where, db) {
        orm.deleteOne('employees', where, info => cb(info))
    }
}