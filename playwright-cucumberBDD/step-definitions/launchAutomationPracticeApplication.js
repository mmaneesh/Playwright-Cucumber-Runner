const { Given, Then, defineStep, When} = require('@cucumber/cucumber');
const { BasePage } = require('../page-objects/base-page');
const basePage = new BasePage();


const locators = {
    automationPracticeLogo : "//img[@alt='My Store']",
    contactUsButton : "//a[@title='Contact Us']",
    createAccountSection : "#create-account_form",
    emailAddressInput : "#email",
    loginForm : "#login_form",
    loginFormSignInButton : "//span[text()[normalize-space()='Sign in']]",
    myAccount : '//div[@id=\'center_column\']',
    passwordInput : "#passwd",
    signInButton : "//a[text()[normalize-space()='Sign in']]",
    shoppingCartLabel : "//a[@title='View my shopping cart']",
};

Given('I Navigate To The Automation Practice Page', async () => {
    await basePage.launchApplication();
    await basePage.validateElementPresent(locators.automationPracticeLogo);
});

Then('I Should See The {string} Element On Landing Page', async (elementName) => {
    switch (elementName) {
        case 'Contact us':
            await basePage.compareElementTextContent(locators.contactUsButton, elementName);
            break;
        case 'Sign in':
            await basePage.compareElementTextContent(locators.signInButton, elementName);
            break;
        default:
            console.log('Please Pass A Valid Tile Name');
    }
});

Then('Shopping Cart Element Should Be Present', async() => {
    await basePage.validateElementPresent(locators.shoppingCartLabel);
});

When('I Click On The Sign In Element', async() => {
    await basePage.validateElementPresent(locators.signInButton);
    await basePage.clickElement(locators.signInButton);
});

Then('I Should See The Create Account Section', async() => {
    await basePage.validateElementPresent(locators.createAccountSection);
});

Then('I Should See The Already Registered Section', async() => {
    await basePage.validateElementPresent(locators.loginForm);
});

Given('I Am On The Automation Practice Login Page', async() => {
    await basePage.navigateToLoginPage();
});

When('I Enter My Email Address', async() => {
    await basePage.enterInputValue(locators.emailAddressInput, 'wtbemeto@sharklasers.com');
});

When('I Enter My Password', async() => {
    await basePage.enterInputValue(locators.passwordInput, 'MyTestPwd@12345');
});

When('I Click On The Sign Button', async() => {
    await basePage.clickElement(locators.loginFormSignInButton);
});

Then('I Should Navigate To The Automation Practice Home Page', async() => {
    await basePage.pause(5000);
    await basePage.validateElementPresent(locators.myAccount);
});