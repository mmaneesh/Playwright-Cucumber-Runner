# Playwright-BDD
Sample Implementation Of Playwright With CucumberJS
Playwright end-to-end test automation with CucumberJS

Getting Started
To install Playwright : npm install playwright --save-dev
To install Cucumber : npm install cucumber --save-dev
To install Junit Reporter : npm install cucumberjs-junitxml --save-dev
To install Chai : npm install chai --save-dev

To execute the tests, define the scripts in package.json as follows :

"scripts": {
    "pretest": "rimraf reports",
    "test": "cucumber-js --require cucumber.js --require cucumber.conf.js --require step-definitions/**/*.js -f json:cucumber_report.json --publish-quiet",
    "report": "node reporter.js",
    "posttest": "npm run report",
    "Test:Report": "npm run test || npm run report"
  },
Finally execute the tests with npm test

Create a global browser for the test session

BeforeAll(async () => {
  console.log('Launch Browser')
  global.browser = await playwright['chromium'].launch(
{
          args: ['--start-maximized', '--disable-web-security', '--disable-features=IsolateOrigins, site-per-process'],
          headless: false,
          slowMo: 200
        })
})

Create a fresh browser context for each test

Before(async (scenario) => {
  console.log(`Starting Cucumber Scenario ${scenario.pickle.name}`);
  global.context = await global.browser.newContext({
        viewport: null,
        recordVideo: {
            dir: './reports/videos/'+ scenario.pickle.name,
        }
    });
    global.page = await global.context.newPage();
})

A sample Feature file

Feature: ARC Login Feature
    As a user I want to login into application

    Scenario: Login with valid credentials
      Given I visit the ARC login page
      When I fill the login form with valid credentials
      Then I should see the home page

    Scenario Outline: Try to login with invalid credentials
      Given I visit the ARC login page
      When I fill the login form with "<username>" and "<password>"
      Then I wait for 3 seconds

      Examples:
          | username | password |
          | invalid-1  | fail-1  |
          | invalid-2  | fail-2  |
          | invalid-3  | fail-3  |
          
A sample stepdefinition

const { Given, When, Then, defineStep } = require('@cucumber/cucumber')
const { LoginPage } = require('../page-objects/login-page')

const loginPage = new LoginPage()

Given('I visit the ARC login page', async function () {
  await loginPage.navigateToLoginScreen()
})

Example of how a Playwright code snippet looks

const { firefox } = require('playwright');
(async () => {
  const browser = await firefox.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.example.com/');
  await page.screenshot({ path: 'page.png', fullPage: true });

  await browser.close();
})();

For more on Playwright click here
