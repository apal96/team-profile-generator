const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./classes/Manager');

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Success!'));

};
function generateHTML(data) {
    const HTML = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <link rel="stylesheet" type="text/css" href="./style.css" />
        <title>Document Location</title>
        <script
          src="https://code.jquery.com/jquery-3.5.1.min.js"
          integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
          crossorigin="anonymous"
        ></script>
      </head>
      <body>
          <div class="container-fluid">
            <header class="row">
            <h1>My Team ${data.teamMember}</h1>
             </header>
    
    
          </div>
      </body>
    </html>
    `
    return HTML;
}
function getInfo(employeeType) {
    if (employeeType === "Manager") {
        inquirer.prompt([
            {
                type: 'input',
                message: `What is the ${employeeType} name?`,
                name: 'managerName',
            },
            {
                type: 'input',
                message: `What is the ${employeeType} id?`,
                name: 'managerId',
            },
            {
                type: 'input',
                message: `What is the ${employeeType} email?`,
                name: 'managerEmail',
            },
            {
                type: 'input',
                message: `What is the ${employeeType} office number?`,
                name: 'managerNumber',
            }

        ]).then(answers => {
            const manager = new Manager(answers.managerName,answers.managerId,answers.managerEmail,answers.managerNumber)
            console.log(manager);
            init();
        })
    }
    if (employeeType === "Engineer") {
        inquirer.prompt([
            {
                type: 'input',
                message: `What is the ${employeeType} name?`,
                name: 'engineerName',
            },
            {
                type: 'input',
                message: `What is the ${employeeType} id?`,
                name: 'engineerId',
            },
            {
                type: 'input',
                message: `What is the ${employeeType} email?`,
                name: 'engineerEmail',
            },
            {
                type: 'input',
                message: `What is the ${employeeType} Github username?`,
                name: 'engineerGit',
            }

        ]).then(answers => {
            const engineer = new Engineer(answers.engineerName,answers.engineerId,answers.engineerEmail,answers.engineerGit)
            init();
        })
    }
    if (employeeType === "Intern") {
        inquirer.prompt([
            {
                type: 'input',
                message: `What is the ${employeeType} name?`,
                name: 'internName',
            },
            {
                type: 'input',
                message: `What is the ${employeeType} id?`,
                name: 'internId',
            },
            {
                type: 'input',
                message: `What is the ${employeeType} email?`,
                name: 'internEmail',
            },
            {
                type: 'input',
                message: `What is the ${employeeType} school?`,
                name: 'internSchool',
            }

        ]).then(answers => {
            const intern = new Intern(answers.internName,answers.internId,answers.internEmail,answers.internSchool)
            init();
        })
    }
    if (employeeType === "None") {
        console.log("Thank you")
       
    }
    // console.log(manager);
    // writeToFile('index.html',generateHTML(answers.internName));

}
function init() {
    inquirer.prompt([
        {
            type: 'list',
            message: 'Which team member would you like to enter information for?',
            name: 'teamMember',
            choices: ['Manager', 'Engineer', 'Intern', 'None']

        }]).then((response) => {
            console.log(response);
            console.log(response.teamMember);
            getInfo(response.teamMember);
           

        })
};

init();
