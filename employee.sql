CREATE TABLE employees (
    employee_id INT PRIMARY KEY,
    name VARCHAR(100),
    department VARCHAR(50),
    salary DECIMAL(10,2)
);

INSERT INTO employees VALUES
(101, 'Anita', 'Engineering', 65000),
(102, 'Rahul', 'Finance', 58000);

SELECT * FROM employees
WHERE department = 'Engineering';
