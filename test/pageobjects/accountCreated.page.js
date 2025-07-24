import { $ } from "@wdio/globals";
import Page from "./page.js";

class AccountCreatedPage extends Page {
  get homeBtn() {
    return $('li [href~="/"]]');
  }

  get loginBtn() {
    return $('[href~="/login"]');
  }

  get title() {
    return $("h2=Features Items");
  }
}

export default new AccountCreatedPage();
