const inquirer = require("inquirer");

const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");

// array of questions for user
const questions = [
    {
        type:"input",
        message:"What is your project title?",
        name:"title"

    },
    {
        type:"input",
        message:"Describe your project.",
        name:'description'
    },
    {
        type:"input",
        message:"What needs to be installed for your project?",
        name:"installation"
    },
    {
        type:"input",
        message:"How is your project used?",
        name:"usage"
    },
    {
        type:"input",
        message:"Who is making your project?",
        name:"credits"
    },
    {
        type:"list",
        message:"What if any, licenses are included?",
        name:"license",
        choices:["MIT", "GPL v3", "AGPL"]
    },
    {
        type:"list",
        message:"Add any badges you would like included in your README file.",
        name:"badges",
        choices:["twitter", "open source", "awesome"]
    },
    {
        type:"input",
        message:"How would you like other developers to contribute to your project? ",
        name:"contribute"
    },
    {
        type:"input",
        message:"How will you test this project?",
        name:"tests"
    },
];




// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(function(userInput) {
        var data = {
            title: userInput.title,
            description: userInput.description,
            installation: userInput.installation,
            usage: userInput.usage,
            credits: userInput.credits,
            license: userInput.license,
            badges: userInput.badges,
            contribute: userInput.contribute,
            tests: userInput.tests
        }
        
      const markdown =   generateMarkdown(data);

      fs.writeFile("../README.md", markdown, function(error){
        if (error) {
            throw error
            
        }
        console.log("success")
        
      });
      
    })
}


// function call to initialize program
init();
