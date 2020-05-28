const orm = require('../db')

module.exports = {
    getRoles(cb) {
        orm.getAll('roles', roles => cb(roles))
    },
    // getEmployeesWhere (where, cb) {
    //     orm.getAllWhere('employees', where, employees => cb(employees))
    // },
    addRole(role, cb) {
        orm.createOne('roles', role, info => cb(info))
    },
    // updateEmployee(changes, where, cb) {
    //     orm.updateOne('employees', changes, where, info => cb(info))
    // },
    deleteRole(where, db) {
        orm.deleteOne('roles', where, info => cb(info))
    }
}