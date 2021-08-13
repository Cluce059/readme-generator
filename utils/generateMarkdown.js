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

function generateMarkdown(name, github, email) {
  return `
  # ${github}
  ## Description
  🔍 ${name}
  ## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
  ## Installation
  💾 ${github}
  ## Usage
  💻 ${name}
  ## License
  <br />
  This application is covered by the ${name} license. 
  ## Contributing
  👪 ${github}
  ## Tests
  ✏️ ${github}
  ## Questions
  ✋ ${name}<br />
  <br />
  :octocat: Find me on GitHub: [${name}](https://github.com/${name})<br />
  <br />
  ✉️ Email me with any questions: ${email}<br /><br />
  _This README was generated with ❤️ by [README-generator](https://github.com/Cluce059/readme-generator) 🔥🔥🔥_

 `;
 }; 







module.exports = generateMarkdown;