// Description, Table of Contents, 
//Installation, Usage, License, Contributing, Tests, and Questions
//const inquirer = require('inquirer');
// var commandLineArgs = process.argv;
// console.log(commandLineArgs);
console.log("hi");
const questions = () =>{
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is your project called?'
      },
      {
          type: 'input',
          name: 'description',
          message: 'Describe the project (required)',
          validate: descriptionInput => {
            if(descriptionInput){
                return true;
            }
            else{
                console.log('Please enter project description!');
                return false;
            }
        }
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Provide some installation instructions: ',
        validate: installationInfo =>{
            if(installationInfo){
                return true;
            }
            else{
                console.log('Please enter installation instructions!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usageInfo',
        message: 'Enter usage information: ',
        validate: usageInfoInput =>{
            if(usageInfoInput){
                return true;
            }
            else{
                console.log('Please enter usage information!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Enter the contribution guidlines: ',
        validate: contributionInfo =>{
            if(contributionInfo){
                return true;
            }
            else{
                console.log('Please enter your contribution guidlines!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'testIntructions',
        message: 'Enter testing intructions: ',
        validate: testInfo =>{
            if(testInfo){
                return true;
            }
            else{
                console.log('Please enter some testing instructions!');
                return false;
            }
        }
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Which type of license do you want to include?',
        choices: ['community', 'MIT', 'GPLv3']
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your Github username',
        validate: githubInput =>{
            if(githubInput){
                return true;
            }
            else{
                console.log('Please enter your Github username');
                return false;
            }
        }

    },
    {
        type: 'input',
        name: 'email',
        message: 'And finally, what is your email address?',
        validate: emailInpnut =>{
            if(emailInpnut){
                return true;
            }
            else{
                console.log('Please enter an email address!');
                return false;
            }
        }
    }
    ]);
};

//questions();

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
// };
// const writeFile = fileContent => {
//     return new Promise((resolve, reject) => {
//         fs.writeFile('./dist/README.md', fileContent, err =>{       
//         //if error, reject primise and go to catch()
//         if(err){
//             reject(err);
//             return;
//         }
//         //if promise, send to .then()
//         resolve({
//             ok: true,
//             message: 'File Created!'
//         });
//     });
// });
// };

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
