import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $, browser } from '@wdio/globals'

import LoginPage from '../pageobjects/login.page.js';
import SecurePage from '../pageobjects/secure.page.js';

const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveText(expect.stringContaining(message));
});
/**
 * Web interaction
 */
Given(/^A web page is openned$/, async function () {

    await browser.url("https://the-internet.herokuapp.com/inputs")
    await browser.setTimeout({ implicit: 15000, pageLoad: 10000 })
    await browser.maximizeWindow()

}

)
When(/^Perform web interations$/, async function () {
    /**
     * 1.Input box
     * Action
     * 1. Type into input box
     * 2. Clear the field and type or just add value
     * 3. Click and type
     * 4. Slow typing
     */

    let num = 1234
    let strNum = num.toString()
    let ele = await $('[type=number]')
    await ele.click()

    for (let i = 0; i < strNum.length; i++) {
        let charStr = strNum.charAt(i)
       
        await browser.keys(charStr)

    }
    

})

