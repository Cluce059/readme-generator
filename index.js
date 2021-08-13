// Description, Table of Contents, 
//Installation, Usage, License, Contributing, Tests, and Questions
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');


//TO DO init an arr of questions
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
        message: 'What is your email address?',
        validate: emailInpnut =>{
            if(emailInpnut){
                return true;
            }
            else{
                console.log('Please enter an email address!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'reachout',
        message: 'And finally, how can users reach out to ask questions?'
    }
    ]);
};

const testData = {
    title: 'Run Buddy',
    description: 'Duis consectetur nunc nunc. Morbi finibus non sapien nec pharetra. Fusce nec dignissim orci, ac interdum ipsum. Morbi mattis justo sed commodo pellentesque. Nulla eget fringilla nulla. Integer gravida magna mi, id efficitur metus tempus et.',
    installation: 'Duis consectetur nunc nunc. Morbi finibus non sapien nec pharetra. Fusce nec dignissim orci, ac interdum ipsum. Morbi mattis justo sed commodo pellentesque. Nulla eget fringilla nulla. Integer gravida magna mi, id efficitur metus tempus et.',
    usageInfo:'Duis consectetur nunc nunc. Morbi finibus non sapien nec pharetra. Fusce nec dignissim orci, ac interdum ipsum. Morbi mattis justo sed commodo pellentesque. Nulla eget fringilla nulla. Integer gravida magna mi, id efficitur metus tempus et. Nam fringilla elit dapibus pellentesque cursus.',
    contribution: 'PRs Welcome',
    testIntructions:'Duis consectetur nunc nunc. Morbi finibus non sapien nec pharetra. Fusce nec dignissim orci, ac interdum ipsum. Morbi mattis justo sed commodo pellentesque. Nulla eget fringilla nulla. Integer gravida magna mi, id efficitur metus tempus et. Nam fringilla elit dapibus pellentesque cursus.',
    license: ['Apache'],
    github: 'Cluce059',
    email: 'cluce059@gmail.com',
    reachout: 'Send me an email, please!'
};

//testing/////////////////////////////
//const profileDataArgs = process.argv.slice(3);

//const [name, github, email] = profileDataArgs;


//    fs.writeFile('./README.md', generateMarkdown(name, github, email), err => {
//     if (err) throw new Error(err);
  
//     console.log('Readme complete! Check out Readme.md to see the output!');
//   });



// TODO: Create a function to write README file
 function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, err =>{       
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


//const pageMarkdown = generateMarkdown(testData);
// TODO: Create a function to initialize app
const init =()=>{
    questions()
    .then(answers =>{
        pageMarkdown = generateMarkdown(answers);
        //console.log(answers);
        console.log(typeof(pageMarkdown));
        console.log(typeof(answers));
        return writeToFile('./dist/README.md', pageMarkdown);
    })
    .catch(err => {
        console.log(err);
    });
};

// Function call to initialize app
init();
