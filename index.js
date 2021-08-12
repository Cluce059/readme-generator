// Description, Table of Contents, 
//Installation, Usage, License, Contributing, Tests, and Questions
const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./utils/generateMarkdown');


//TO DO init an arr of questions
const questions = data =>{
    if(!data){
        data = [];
    }
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
        choices: ['Apache', 'ISC', 'GNU', 'MIT', 'open']
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


// TODO: Create a function to write README file
 function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err =>{       
        //if error, reject primise and go to catch()
        if(err){
            reject(err);
            return;
        }
        //if promise, send to .then()
        resolve({
            ok: true,
            message: 'File Created!'
        });
    });
});
};

// TODO: Create a function to initialize app
const init =()=>{
    questions()
    .then(data =>{
        return generatePage(data);
        console.log(data);
    })
    //.then(pageMarkdown =>{
        //return writeToFile(pageMarkdown);
    //})
    .catch(err => {
        console.log(err);
    });
};

// Function call to initialize app
init();
