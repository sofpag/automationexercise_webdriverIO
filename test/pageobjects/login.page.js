import { $ } from "@wdio/globals";
import Page from "./page.js";

class LoginPage extends Page {
  /**
   * define selectors using getter methods
   */
  get newUserName() {
    return $(`[data-qa~='signup-name']`);
  }
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   
  async login(username, password) {
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    await this.btnSubmit.click();*/
  }

  /**
   * overwrite specific options to adapt it to page object
   */
  open() {
    return super.open("login");
  }
}

export default new LoginPage();
