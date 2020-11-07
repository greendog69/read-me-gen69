// function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

# Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Test](#test)
- [Credits](#credits)
- [License](#license)
- [Questions](#questions)

## Description:
![License](https://img.shields.io/badge/License=${data.license}-blue.svg) "License Badge")

    ${data.description}

## Installation:
    ${data.installation}
## Usage:
    ${data.usage}
## Contributing:
    ${data.contribution}
## Test:
    ${data.test}
## Credits:
    ${data.credit}
## License:
    For more information about the License, click on the link below.

- [License](https://opensource.org/licenses/${data.license})

## Questions:
    For questions about the project you can go to the 
    Github page at the following link:

- [GitHub Profile](https://github.com/${data.username})

For additional questions please reach out to this email address at: ${data.email}.
`;
}

module.exports = generateMarkdown;
