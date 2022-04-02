const Engineer = require('../lib/Engineer');

test ('creates an engineer profile', () =>{
    const engineer = new Engineer ('Carlos', '1', '@gmail.com', 'ghchannel' ); 

    expect(engineer.name).toBe("Carlos");
    expect(engineer.id).toBe('1');
    expect(engineer.email).toBe('@gmail.com');
    expect(engineer.gitHub).toBe('ghchannel')
})