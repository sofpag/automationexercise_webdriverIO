import { $ } from "@wdio/globals";
import Page from "./page.js";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
  get newUserTitle() {
    return $("h2=Features Items");
  }

  get newUserNameInput() {
    return $("[data-qa~='signup-name']");
  }

  get newUseEmailInput() {
    return $("[data-qa~='signup-email']");
  }

  get newUseBtnSubmit() {
    return $("[data-qa~='signup-button']");
  }

  async createUser(userName, userEmail) {
    await this.newUserNameInput.setValue(userName);
    await this.newUseEmailInput.setValue(userEmail);
    await this.newUseBtnSubmit.click();
  }

  open() {
    return super.open("login");
  }
}

export default new LoginPage();
