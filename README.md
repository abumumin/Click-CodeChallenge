PREREQUISITE 
Operating System
MacOS 10.9 and above (64-bit only)
Windows 7 and above
Supporting Libraries
Node.js (12 or Higher) - Cross verify the Node.js installation by running the command: node –version in the terminal. To verify the npm version, run the npm –version command.


Type of automation tool to be used: Cypress

Tools: Cypress with TypeScripts, Framework: Cucumber with BDD Framework Model I adopted: Page Object Model (POM)

Step to Run the Automation
To run the automated tests, follow these steps:
    Download the scripts folder
    run: **npm install**

Note:

The filter was implemented to filter two conditions but it is important to note that the filter will only filter one condition at a time. The reason is that the filter is created in a select tag and select can only act on a single value or option at a time.

A better implementation would be to use a scenario outline to go through the two types of filter selected. Time constrain would not permit that.

Run Tests The test can be run in GUI mode Run npx cypress open --e2e to launch Cypress and select desired browser