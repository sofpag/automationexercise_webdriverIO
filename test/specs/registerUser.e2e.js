import { expect } from "@wdio/globals";
import Page from "../pageobjects/page.js";
import LoginPage from "../pageobjects/login.page.js";
import HomePage from "../pageobjects/home.page.js";
import SignupPage from "../pageobjects/signup.page.js";
import AccountPage from "../pageobjects/account.page.js";

const newUserName = "testUserName";
const newUserEmail = "3asddd@examplee.com";

const titleGender = "Mrs"; // Options (string): Mr; Mrs.
const password = "testPassword";
const BDDay = 3; // Options: days of a month in numbers, e.g. 20
const BDMonth = 10; // Options: 1 to 12
const BDYear = 1990; // Options: 1900 to 2021

const firstName = "testName";
const lastName = "testLastName";
const street = "testAdress 123";
const country = "Israel"; // Options:
const state = "testState";
const city = "testCity";
const zipcode = 2000;
const mobilePhone = 123456789;

describe("My application", () => {
  it("should open homepage", async () => {
    await browser.url("https://www.automationexercise.com/");
  });

  it("should create a new user", async () => {
    await HomePage.loginBtn.click();

    await LoginPage.newUserTitle.isDisplayed();

    await LoginPage.createUser(newUserName, newUserEmail);
  });

  it("should complete 'Account Information' section form", async () => {
    await SignupPage.completeAccountInfo(
      titleGender,
      password,
      BDDay,
      BDMonth,
      BDYear
    );
  });

  it("should complete form and confirm user creation", async () => {
    await SignupPage.completeAddressInfo(
      firstName,
      lastName,
      street,
      country,
      state,
      city,
      zipcode,
      mobilePhone
    );

    await AccountPage.checkUrl("account_created");
    await AccountPage.btn.click();
  });

  it("should confirm login with new account and delete it", async () => {
    await expect(HomePage.username).toHaveText(newUserName);
    await HomePage.deleteBtn.click();
    await AccountPage.checkUrl("delete_account");
    await AccountPage.btn.click();
  });
});
