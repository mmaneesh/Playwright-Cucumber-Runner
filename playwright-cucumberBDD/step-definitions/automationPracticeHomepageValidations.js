const { Given, Then, defineStep } = require('@cucumber/cucumber')
const {HomePage} = require("../page-objects/home-page");
const homePage = new HomePage()

const locators = {
    accountHolder : "//a[@title='View my customer account']//span",
    automationPracticeLogo : "//img[@alt='My Store']",
    backToHomeButton : "//a[@title='Home']//span",
    emailAddressInput : "#email",
    loginForm : "#login_form",
    loginFormSignInButton : "//span[text()[normalize-space()='Sign in']]",
    myAccount : '//div[@id=\'center_column\']',
    myAccountBreadCrumb : "//span[text()='My account']",
    passwordInput : "#passwd",
    searchInput : "//input[contains(@class,'search_query form-control')]",
    signInButton : "//a[text()[normalize-space()='Sign in']]",
    signOutLink : "//a[@title='Log me out']",
}

Given('I Navigate To The Automation Practice Home Page', async() => {
    await homePage.launchApplication();
    await homePage.validateElementPresent(locators.automationPracticeLogo);

    await homePage.validateElementPresent(locators.signInButton);
    await homePage.clickElement(locators.signInButton);

    // await homePage.validateElementPresent(locators.createAccountSection);
    // await homePage.validateElementPresent(locators.loginForm);

    await homePage.enterInputValue(locators.emailAddressInput, 'wtbemeto@sharklasers.com');
    await homePage.enterInputValue(locators.passwordInput, 'MyTestPwd@1234');

    await homePage.clickElement(locators.loginFormSignInButton);

    await homePage.pause(5000);
    await homePage.validateElementPresent(locators.myAccount);


})

Then('I Should See The {string} Element On Home Page', async (elementName) => {
    switch (elementName) {
        case 'Sign out':
            await homePage.compareElementTextContent(locators.signOutLink, elementName);
            break;
        case 'My account':
            await homePage.compareElementTextContent(locators.myAccountBreadCrumb, elementName);
            break;
        default:
            console.log('Please Pass A Valid Element Name');
    }
});

Then('I Should See The Search Input Element', async() => {
    await homePage.validateElementPresent(locators.searchInput);
});

Then('I Should See The Back To Home Button', async() => {
    await homePage.validateElementPresent(locators.backToHomeButton);
});

