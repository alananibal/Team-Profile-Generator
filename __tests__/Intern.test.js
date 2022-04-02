const Intern = require('../lib/Intern');

test ('creates an Intern profile', () =>{
    const intern = new Intern ('Carlos', '1', '@gmail.com', 'Harvard' ) 

    expect(intern.name).toBe("Carlos");
    expect(intern.id).toBe('1');
    expect(intern.email).toBe('@gmail.com');
    expect(intern.school).toBe('Harvard');
});

