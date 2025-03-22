import { Given, When, Then } from "@wdio/cucumber-framework";
import { $, browser } from "@wdio/globals";
import { expect } from "chai";
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
  await browser.url(
    "https://www.microsoft.com/vi-vn/microsoft-365/outlook/email-and-calendar-software-microsoft-outlook"
  );
  await browser.setTimeout({ implicit: 15000, pageLoad: 10000 });
  await browser.maximizeWindow();
});
When(/^Perform web interations$/, async function () {
  try {
    console.log("Finding login link...");
    const loginLink = await $(
      "#c-shellmenu_custom_outline_newtab_signin_bhvr100_right"
    );
    try {
      console.log("Waiting for login link to be clickable...");
      await loginLink.waitForClickable({ timeout: 5000 });
      console.log("Clicking the login link...");
      await loginLink.click();
    } catch (error) {
      console.error("Error clicking the login link:", error);
    }
  } catch (error) {
    console.error("Error finding the login link:", error);
  }

  let windowHandles;
  try {
    console.log("Getting window handles...");
    windowHandles = await browser.getWindowHandles();
  } catch (error) {
    console.error("Error getting window handles:", error);
  }

  let newWindowHandle;
  try {
    console.log("Switching to the new window...");
    newWindowHandle = windowHandles[1];
    await browser.switchToWindow(newWindowHandle);
  } catch (error) {
    console.error("Error switching to new window:", error);
  }

  let inputUserName;
  try {
    console.log("Entering username...");
    inputUserName = await $('//input[@name="loginfmt"]');
    await inputUserName.setValue("21dh112021@st.huflit.edu.vn");
  } catch (error) {
    console.error("Error entering username:", error);
  }

  let btnNext;
  try {
    console.log("Clicking the 'Next' button...");
    btnNext = await $('//button[@type="submit"]');
    await btnNext.click();
    console.log("Waiting after clicking 'Next'...");
    await browser.pause(5000);
  } catch (error) {
    console.error("Error clicking the 'Next' button:", error);
  }

  let inputPws;
  try {
    console.log("Waiting for password input...");
    inputPws = await $(`//input[@name="passwd"]`);
    await inputPws.waitForClickable({ timeout: 5000 }); // Ensure input is clickable before interacting with it
    console.log("Clicking on password input...");
    await inputPws.click();
  } catch (error) {
    console.error("Error interacting with password input:", error);
  }

  let pws = `18042003Aa`; // Example password with special characters
  let strPsw = pws.toString();
  console.log("Typing password...");
  for (let i = 0; i < strPsw.length; i++) {
    let charStr2 = strPsw.charAt(i);
    try {
      // Handle special characters and regular characters correctly
      if (
        charStr2 === "!" ||
        charStr2 === "@" ||
        charStr2 === "#" ||
        charStr2 === "$" ||
        charStr2 === "%"
      ) {
        console.log(`Typing special character: ${charStr2}`);
        await browser.keys(charStr2); // This should work directly for basic special characters
      } else {
        console.log(`Typing regular character: ${charStr2}`);
        await browser.keys(charStr2); // Normal alphanumeric characters
      }
    } catch (error) {
      console.error("Error typing password character:", error);
    }
  }

  let btnSignin;
  try {
    console.log("Waiting for 'Sign in' button...");
    btnSignin = await $(`//input[@value="Sign in"]`);
    await btnSignin.waitForClickable({ timeout: 5000 });
    console.log("Clicking the 'Sign in' button...");
    await btnSignin.click();
    console.log("Waiting after clicking 'Sign in'...");
    await browser.pause(5000);
  } catch (error) {
    console.error("Error clicking the 'Sign in' button:", error);
  }

  let btnLastSubmit;
  try {
    console.log("Waiting for final submit button...");
    btnLastSubmit = await $(`//input[@type="submit"]`);
    await btnLastSubmit.waitForClickable({ timeout: 5000 });
    console.log("Clicking the final submit button...");
    await btnLastSubmit.click();
    console.log("Waiting after final submit...");
    await browser.pause(2000);
  } catch (error) {
    console.error("Error clicking the final submit button:", error);
  }

  let btnHome = await $(
    `//button[@type="button"]//span[contains(text(),"Home")]`
  );
  let btnCreateMail = await $(`//span[contains(text(),"New mail")]`);
  let btnSend = await $(`//button[@aria-label="Send"]`);
  let inputTo = await $(`//div[@aria-label="To"]`);
  let inputSubject = await $(`//input[@aria-label="Add a subject"]`);
  let txtContent = await $(`//div[contains(@aria-label,"Message body")]`);

  try {
    // Click on the Home button and wait for it to be clickable
    try {
      await btnHome.click();
    } catch (error) {
      console.error("Error clicking on the Home button:", error);
    }

    try {
      await btnCreateMail.click();
    } catch (error) {
      console.error("Error clicking on New mail button:", error);
    }

    let email = `quyentranvoto@gmail.com`; // Example password with special characters
    let strPsw = email.toString();

    console.log("Setting password...");

    try {
      // Find the input field by its selector// Change the selector as needed
      await inputTo.setValue(strPsw); // Set the value directly
      browser.keys(enter);
      console.log("Password has been set.");
    } catch (error) {
      console.error("Error setting password:", error);
    }

    try {
      await txtContent.waitForClickable({ timeout: 5000 });
      await txtContent.click();
      await txtContent.setValue(
        "Good Morning Teacher, Hope you are doing well"
      );
    } catch (error) {
      console.error(
        "Error interacting with the Message Body input field:",
        error
      );
    }

    let subject = `Test Email`;
    let stSubject = subject.toString();
    await inputSubject.waitForDisplayed({ timeout: 5000 });
    await inputSubject.setValue(stSubject);

    // Wait for the Send button to be clickable and then click
    try {
      await btnSend.waitForClickable({ timeout: 5000 });
      await btnSend.click();
      console.log("Email sent successfully!");
    } catch (error) {
      console.error("Error clicking the Send button:", error);
    }
  } catch (error) {
    console.error("An error occurred during the overall process:", error);
  }
  
  let btnSent = await $('//div[@data-folder-name="sent items"]//span[contains(text(), "Sent Items")]');
  let spanMailIsSent = await $('//div[@aria-setsize="0"]//span[contains(text(), "quyentranvoto@gmail.com")]');
  
  await btnSent.click(); 
  
  await spanMailIsSent.waitForDisplayed({ timeout:1000}); 
  expect(await spanMailIsSent.getText()).equal('quyentranvoto@gmail.com');
  
  // Optionally, verify that the URL has changed after clicking

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
