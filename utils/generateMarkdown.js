// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
module.exports = data => {
  console.log(data);
    if (!data) {
      return '';
    }
    return `
    # ${data.title}
    ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)<br />
    ## Description
    🔍 ${data.description}
    ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
    ## Installation
    💾 ${data.installation}
    ## Usage
    💻 ${data.usageInfo}
    ## License
    ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)
    <br />
    This application is covered by the ${data.license} license. 
    ## Contributing
    👪 ${data.contribution}
    ## Tests
    ✏️ ${data.testIntructions}
    ## Questions
    ✋ ${data.reachout}<br />
    <br />
    :octocat: Find me on GitHub: [${data.github}](https://github.com/${data.github})<br />
    <br />
    ✉️ Email: ${data.email}<br /><br />
    _This README was generated with ❤️ by [README-generator](https://github.com/Cluce059/readme-generator) 🔥🔥🔥_
  
   `; 

 }; 
//module.exports = generateMarkdown;