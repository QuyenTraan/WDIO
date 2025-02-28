import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $, browser } from '@wdio/globals'
import * as chai from 'chai';


import LoginPage from '../pageobjects/login.page.js';
import SecurePage from '../pageobjects/secure.page.js';

const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    // await pages[page].open()
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    // await LoginPage.login(username, password)
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    // await expect(SecurePage.flashAlert).toBeExisting();
    // await expect(SecurePage.flashAlert).toHaveText(expect.stringContaining(message));
});
/**
 * Web interaction
 */
Given(/^A web page is openned$/, async function () {

    await browser.url("https://the-internet.herokuapp.com/checkboxes")
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

    // let num = 1234
    // let strNum = num.toString()
    // let ele = await $('[type=number]')
    // await ele.click()

    // for (let i = 0; i < strNum.length; i++) {
    //     let charStr = strNum.charAt(i)

    //     await browser.keys(charStr)

    // }

    /**
     * 2.Dropdown
     * Action
     * 1. Assert default option is selected
     * 2. Select by atribute, text, index
     * 3. Get a list of option
     */
    //Assert default option is selected
    // let ele1 = await $('//select/option[@selected="selected"]')
    // let val = await ele1.getText()
    // chai.expect(val).to.equal("Please select an option")

    // //Select a specific option
    // let ddEle = await $(`#dropdown`)

    // await ddEle.selectByVisibleText("Option 2")

    // await ddEle.selectByAttribute("value","1")
    // await ddEle.selectByIndex(2)

    /**
     * 3. Get a list of option
     */

    // let eleArr = await $$(`select>option`);
    // let arr = [];
    // for (let i = 0; i < eleArr.length; i++) { // Corrected the typo here
    //     let ele = eleArr[i];
    //     let val = await ele.getText();
    //     arr.push(val);
    //     console.log(val);
    // }

    // console.log(`>>Option array: ${arr}`);

    /**
     * 3. Check box
     * Action:
     * 1. Select an action
     * 2. Unselect an option (if selected)
     * 3. Alert if option selected
     * 4. Select all options
     * 
     */
    let ele = await $(`//form[@id="checkboxes"]//input[1]`)
    await ele.click()


    let ele2= await $(`//form[@id="checkboxes"]//input[2]`)
    await ele2.click()

    
    // await browser.debug()

})

