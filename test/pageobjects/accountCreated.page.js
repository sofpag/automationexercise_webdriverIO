import { $ } from "@wdio/globals";
import Page from "./page.js";

class AccountCreatedPage extends Page {
  get btn() {
    return $('[data-qa="continue-button"]');
  }

  async checkUrl() {
    let currentUrl = await browser.getUrl();
    expect(currentUrl).toBe(
      "https://www.automationexercise.com/account_created"
    );
  }
}

/*

*/

export default new AccountCreatedPage();
