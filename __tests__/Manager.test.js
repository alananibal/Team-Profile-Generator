const Manager = require('../lib/Manager');

test ('creates an manager profile', () =>{
    const manager = new Manager ('Carlos', '1', '@gmail.com', 12345 ) 

    expect(manager.name).toBe("Carlos");
    expect(manager.id).toBe('1');
    expect(manager.email).toBe('@gmail.com');
    expect(manager.officeNumber).toEqual(expect.any(Number));
})