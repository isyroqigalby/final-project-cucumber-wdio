const { Given, When, Then } = require("@wdio/cucumber-framework");
const Page = require("../pages/page");
const LoginPage = require("../pages/login.page");
const DashboardPage = require("../pages/dashboard.page")

Given(/^I open Kasirqa website$/, async () =>{
    await Page.open('/');
})

When(/^I login with valid credentials$/, async () =>{
    await LoginPage.login('tokobarusayates@gmail.com', 'tokobarusayates')
})

Then(/^I should be on inventory page$/, async () =>{
    await DashboardPage.assertDashboardUrl();
})

When(/^I login with invalid email$/, async () =>{
    await LoginPage.login('tokobarusayates@gmail.csom', 'tokobarusayates');
})

Then(/^I should be got an error email message$/, async () =>{
    await LoginPage.assertErrorMessage('"email" must be a valid email')
})

When(/^I login with invalid password$/, async () =>{
    await LoginPage.login('tokobarusayates@gmail.com', 'tokobarusayatesaaa');
})

Then(/^I should be got an error password message$/, async () =>{
    await LoginPage.assertErrorMessage('Kredensial yang Anda berikan salah')
})