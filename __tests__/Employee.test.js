const Employee = require('../lib/Employee');

test ('creates an employee profile', () => {
    const employee = new Employee ('Carlos', '1', '@gmail.com');

    expect(employee.name).toBe("Carlos");
    expect(employee.id).toBe('1');
    expect(employee.email).toBe('@gmail.com');

})





