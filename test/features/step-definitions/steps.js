import { Given, When, Then } from "@wdio/cucumber-framework";
import { $, browser } from "@wdio/globals";
import { expect as chai } from "chai";
import LoginPage from "../pageobjects/login.page.js";
import SecurePage from "../pageobjects/secure.page.js";


const pages = {
  login: LoginPage,
};

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
  await browser.url("https://courses.huflit.edu.vn/my/");
  await browser.setTimeout({ implicit: 15000, pageLoad: 10000 });
  await browser.maximizeWindow();
});
When(/^Perform web interations$/, async function () {
  let loginbyMicrosoft = await $(
    `//a[@title="Office 365 for Student"]/parent::div`
  );
  let inputUserName = await $(`//input[@name="loginfmt"]`);
  let btnNext = await $(`//input[@type="submit"]`);
  let inputPws = await $(`//input[@name="passwd"]`);
  let btnSignin = await $(`//input[@value="Sign in"]`);
  let btnLastSubmit = await $(`//input[@type="submit"]`)
  let divTitlle = await $(`//section[@data-block="recentlyaccessedcourses"]//div[@data-region="card-deck"]//span[contains(text(),"242123053411-Bảo đảm chất lượng phần mềm")]`)
  // Wait for the login button to be clickable and then click it
  await loginbyMicrosoft.waitForClickable({ timeout: 5000 });
  await loginbyMicrosoft.click();

  // Wait for the username input field to be clickable
  await inputUserName.waitForClickable({ timeout: 5000 });

  // Convert the number to a string (seems to be an ID for the user)
  let num = `21dh112021@st.huflit.edu.vn`;
  let strNum = num.toString();

  // Click the username input field
  await inputUserName.click();

  // Type each character of the username into the input field using browser.keys
  for (let i = 0; i < strNum.length; i++) {
    let charStr = strNum.charAt(i);
    await browser.keys(charStr);
  }

  // Wait for the Next button to be clickable and then click it
  await btnNext.waitForClickable({ timeout: 5000 });
  await btnNext.click();

  // Optionally, you can add a pause or wait for a next step after clicking
  await browser.pause(5000);

  let pws = `18042003Aa`; // Example password with special characters
  let strPsw = pws.toString();
  
  await inputPws.waitForClickable({ timeout: 5000 }); // Ensure input is clickable before interacting with it
  await inputPws.click();
  
  for (let i = 0; i < strPsw.length; i++) {
      let charStr2 = strPsw.charAt(i);
      
      // Handle special characters and regular characters correctly
      if (charStr2 === '!' || charStr2 === '@' || charStr2 === '#' || charStr2 === '$' || charStr2 === '%') {
          // Handle special characters explicitly if needed, using the key codes if required
          await browser.keys(charStr2);  // This should work directly for basic special characters
      } else {
          await browser.keys(charStr2);  // Normal alphanumeric characters
      }
  }
  await btnSignin.waitForClickable({ timeout: 5000 });
  await btnSignin.click();

  // Optionally, you can add a pause or wait for a next step after clicking
  await browser.pause(5000);

  await btnLastSubmit.waitForClickable({ timeout: 5000 });
  await btnLastSubmit.click();
  await browser.pause(5000);




  /**
   * 1.Input box
   * Action
   * 1. Type into input box
   * 2. Clear the field and type or just sadd value
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
   * 3. Asert if option selected
   * 4. Select all options
   *
   */

  //1. Select an action
  // let ele = await $(`//form[@id="checkboxes"]//input[1]`)
  // await ele.click()
  // let elaArr = await $$(`//form[@id="checkboxes"]//input`);
  // await ele2.click()
  //2. Unselect an option if selected

  //   if (!(await ele2.isSelected())) {
  //     await ele2.click();
  //   }
  //3. Asert if option selected
  // let isChecked = await ele2.isSelected();
  // chai.expect(isChecked).to.be.true
  // await browser.debug()
  // 4.Select all optiond
  // for (let i = 0; i < elaArr.length; i++) {
  //     let ele = elaArr[i];
  //     if (!await ele.isSelected()) {
  //         ele.click()
  //     }
  // }
});
