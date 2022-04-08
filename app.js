const inquirer = require("inquirer");
const generatePage = require('./page-template');
// const { writeFile, copyFile } = require('./utils/generate-site');

const getTeamProperties = () => {
    return inquirer.prompt([
        {
          type: 'input',
          name: 'name',
          message: 'What is the Team manager name? (Required)',
          validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Please enter a valid Name');
              return false;
            }
          }
        },
        {
          type: 'input',
          name: 'id',
          message: 'What is the new team mamager id number? (Required)',
        },
        {
          type: 'input',
          name: 'email',
          message: 'What is the new team manager email address? (Required)',
          // validate: function (email) {
  
          //   valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)

          //   if (valid) {
          //     console.log("Great job");
          //       return true;
          //   } else {
          //       console.log(".  Please enter a valid email")
          //       return false;
          //   }}
        },
        {
          type: 'input',
          name: 'officeNumber',
          message: 'What is the new manager office number? (Required)',
          validate: officeInput => {
            if (officeInput) {
              return true;
            } else {
              console.log('Please enter a valid office number');
              return false;
            }
          }
        },
        {
            type: 'list',
            name: 'employeeRole',
            message: 'Which Type of Team Member would you like to add?',
            choices: ['Intern', 'Engineer', 'I don\'t want to add any more team members']
        }
        
    ])
    
    .then(({ employeeRole }) => {
       
      // teamData.
      if(employeeRole === 'Intern') {
        return internProperties();
      }
      if(employeeRole === 'Engineer') {
        return engineerProperties();
      }
      else{
        console.log('Your Team Profile page is generated');
      }

    })
};

const internProperties = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the intern name? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter a valid Name');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is the intern id number? (Required)',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the new intern email address? (Required)',
      // validate: function (email) {

      //   valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)

      //   if (valid) {
      //     return true;
      //   } else {
      //       console.log(".  Please enter a valid email")
      //       return false;
      //   }}
    },   
    {
      type: 'input',
      name: 'school',
      message: 'What is the intern School? (Required)',
    },
    {
      type: 'list',
      name: 'employeeRole',
      message: 'Which Type of Team Member would you like to add?',
      choices: ['Intern', 'Engineer', 'I don\'t want to add any more team members']
    }
  ])
  .then(({ employeeRole }) => {
       
    // teamData.
    if(employeeRole === 'Intern') {
      return internProperties();
    }
    if(employeeRole === 'Engineer') {
      return engineerProperties();
    }
    else{
      console.log('Your Team Profile page is generated');
    }

  })
};



const engineerProperties = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the engineer name? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter a valid Name');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is the engineer id number? (Required)',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the new engineer email address? (Required)',
      // validate: function (email) {

      //   valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)

      //   if (valid) {
      //     return true;
      //   } else {
      //       console.log(".  Please enter a valid email")
      //       return false;
      //   }}
    }, 
    {
      type: 'input',
      name: 'gitHub',
      message: 'What is the new Engineer Git Hub username? (Required)',
      validate: gitHubInput => {
        if (gitHubInput) {
          return true;
        } else {
          console.log('Please enter a valid username');
          return false;
        }
      }
    },
    {
      type: 'list',
      name: 'employeeRole',
      message: 'Which Type of Team Member would you like to add?',
      choices: ['Intern', 'Engineer', 'I don\'t want to add any more team members']
    }
  ])
  .then(({ employeeRole }) => {
       
    // teamData.
    if(employeeRole === 'Intern') {
      return internProperties();
    }
    if(employeeRole === 'Engineer') {
      return engineerProperties();
    }
    else{
      console.log('Your Team Profile page is generated');
    }

  })
};

getTeamProperties()
.then(answers => {
    console.table(answers);
    


    // internProperties()
    // .then(answers =>{
    //   console.table(answers);
    // });



    // engineerProperties()
    // .then(answers =>{
    //   console.table(answers);
    // });





    // const pageHtml = generatePage(answers);
    //     fs.writeFile('./generated-html/index.html', pageHtml, err=>{
    //         if(err) throw new Error(err);
    //         console.log(answers);
    //         console.log('Readme file created! Check out readmefile.txt in this directory to see it!');
    //     });

});

