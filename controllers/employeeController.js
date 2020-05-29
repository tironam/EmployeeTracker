const orm = require('../db')

module.exports = {
    getEmployees() {
        orm.getAll('employee')
    },
    getEmployeesWhere (where) {
        orm.getAllWhere('employee', where, employee)
    },
    addEmployee (employee) {
        orm.createOne('employee', employee, info)
    },
    updateEmployee (changes, where) {
        orm.updateOne('employee', changes, where, info)
    },
    deleteEmployee (where, db) {
        orm.deleteOne('employee', where, info)
    }
}