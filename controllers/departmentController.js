const orm = require('../db')

module.exports = {
    getDepartments (cb) {
        orm.getAll('departments', departments => cb(departments))
    },
    // getEmployeesWhere (where, cb) {
    //     orm.getAllWhere('employees', where, employees => cb(employees))
    // },
    addDepartment(department, cb) {
        orm.createOne('departments', department, info => cb(info))
    },
    // updateEmployee(changes, where, cb) {
    //     orm.updateOne('employees', changes, where, info => cb(info))
    // },
    deleteDepartment(where, db) {
        orm.deleteOne('departments', where, info => cb(info))
    }
}