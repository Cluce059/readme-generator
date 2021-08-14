// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
renderLicenseBadge = license => {
  if(!license){
    return '';
  }
    const badge = `![badge](https://img.shields.io/badge/license-${license}-blueviolet)`;
    console.log(typeof(badge));
    return badge;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
renderLicenseLink =license => {
  if(!license){
    return '';
  }
  const licenseLink = `https://img.shields.io/badge/license-${license}-blueviolet`;
  return licenseLink;
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = license =>{
  if(!license){
    return '';
  }
  //console.log(renderLicenseLink(license));
  const licenseSection =
  `
  ${renderLicenseBadge(license)}
  This project was made with a/an ${license} license.
  `;
  return licenseSection;
};

// TODO: Create a function to generate markdown for README
module.exports = data => {
  console.log(data);
    if (!data) {
      return '';
    }
  return `
  ## ${data.title}
  ${renderLicenseBadge(data.license)}
  <br />
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
  ${renderLicenseSection(data.license)}
  ## Contributing
  😇 ${data.contribution}
  ## Tests
  ❗  ${data.testIntructions}
  ## Questions
  👽 ${data.reachout}<br />
  <br />
  :octocat: Find me on GitHub: [${data.github}](https://github.com/${data.github})<br />
  <br />
  💬 Email: ${data.email}<br /><br />
  _This README was generated with ❤️ by [README-generator](https://github.com/Cluce059/readme-generator) 	👀👀👀_
  `; 
 }; 
//module.exports = generateMarkdown;
//![badge](https://img.shields.io/badge/license-open-brightgreen)<br />
//![badge](https://img.shields.io/badge/license-${data.license}-blueviolet)
// ![badge](https://img.shields.io/badge/license-${license}-blueviolet)