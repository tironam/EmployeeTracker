const orm = require('../db')

module.exports = {
    getEmployees() {
        orm.getAll('employee')
    },
    getEmployeesWhere (where, cb) {
        orm.getAllWhere('employee', where, employee => cb(employee))
    },
    addEmployee (employee, cb) {
        orm.createOne('employee', employee, info => cb(info))
    },
    updateEmployee (changes, where, cb) {
        orm.updateOne('employee', changes, where, info => cb(info))
    },
    deleteEmployee (where, db) {
        orm.deleteOne('employee', where, info => cb(info))
    }
}