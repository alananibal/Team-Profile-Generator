const inquirer = require("inquirer");
const generatePage = require('./page-template');
// const { writeFile, copyFile } = require('./utils/generate-site');

const getEmployeeProperties = () => {
    return inquirer.prompt([
        {
          type: 'input',
          name: 'name',
          message: 'What is your new Team member name? (Required)',
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
          message: 'What is the new team member id number? (Required)',
        },
        {
          type: 'input',
          name: 'email',
          message: 'What is the new team member email address? (Required)',
        },
        {
            type: 'list',
            name: 'employeeRole',
            message: 'what is the new employee role',
            choices: ['Intern', 'Engineer', 'Manager']
            // if and else
            
        }
        // inquire questions
    ])
};

const internProperties = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'school',
      message: 'What is the new intern School? (Required)',
    },
  ])
};

const managerProperties = () => {
  return inquirer.prompt([
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
  ])
};

const engineerProperties = () => {
  return inquirer.prompt([
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
  ])
};

getEmployeeProperties()
.then(answers => {
    console.table(answers);
    


    // internProperties()
    // .then(answers =>{
    //   console.table(answers);
    // });



    // managerProperties()
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


