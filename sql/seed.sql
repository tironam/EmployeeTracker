USE work_db;
INSERT INTO department (name)
VALUES ('Engineering'), ('Sales'), ('Legal'), ('Finance');

USE work_db;
INSERT INTO role (title, salary, department_id)
VALUES ('Manager', 250000, 1), ('Sales Lead', 100000, 2), ('Legal Team Lead', 200000, 3), ('Accountant', 80000, 4), ('Engineer', 120000, 1), ('Salesperson', 75000, 2), ('Lawyer', 120000, 3)

USE work_db;
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Richard', 'Hendricks', 1, 1), ('Monica', 'Hall', 2, null), ('Dinesh', 'Chugtai', 5, 1), ('Jan', 'The Man', 6, null);