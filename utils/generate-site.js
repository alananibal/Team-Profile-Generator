
const fs = require('fs');

const managerCard = require ('../src/manager-card');
const internCard = require ('../src/intern-card');
const engineerCard = require ('../src/engineer-card');

const generatePage = require("../src/page-template.js")

const generateHtml = (teamData) => {
    let cards = "";

    for (let i = 0; i < teamData.length; i++) {
        if(teamData[i].getRole()==="Manager") {
            cards += managerCard(teamData[i]);
        }
        if(teamData[i].getRole()==="Intern") {
            cards += internCard(teamData[i]);
        }
        if(teamData[i].getRole()==="Engineer") {
            cards += engineerCard(teamData[i]);
        }
        
    }


    fs.writeFile('./dist/index.html', generatePage(cards), err =>{
               
        if(err){
            console.log(err)
            return
        }
    });


}

module.exports = generateHtml;








