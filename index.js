const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generatedMarkDown = require("./utils/generateMarkdown");

const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const questions = [
  {
    type: "input",
    message: "What is the name of your Project?",
    name: "title",
  },
  {
    type: "input",
    message: "Please enter a description of your project.",
    name: "description",
  },
  {
    type: "input",
    message:
      "What are the installation instructions for this project. Write NONE if no instructions",
    name: "installation",
  },
  {
    type: "input",
    message: "How would you like your application to be used?",
    name: "usage",
  },
  {
    type: "input",
    message: "Who contributed on this project?",
    name: "contribution",
  },
  {
    type: "input",
    message: "What are the test instructions?",
    name: "test",
  },
  {
    type: "checkbox",
    message: "Please select a license.",
    choices: ["Apache", "MIT", "ISC", "GNU GPLv3"],
    name: "license",
  },
  {
    type: "input",
    message: "Whose credit is this work?",
    name: "credit",
  },
  {
    type: "input",
    message: "What is your GitHub username",
    name: "username",
  },
  {
    type: "input",
    message: "What is your email address",
    name: "email",
  },
];

// function to write README file
async function writeToFile(fileName, data) {
  const promptQuestion = await inquirer.prompt(data);
  const readMe = generatedMarkDown(promptQuestion);
  await writeFileAsync(fileName, readMe);
}

// function to initialize program
async function init() {
  try {
    await writeToFile("README.md", questions);
    console.log("Success!");
  } catch (err) {
    console.log(err);
  }
}

// function call to initialize program
init();
