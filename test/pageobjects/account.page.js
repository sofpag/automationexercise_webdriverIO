import { $ } from "@wdio/globals";
import Page from "./page.js";

class AccountPage extends Page {
  get btn() {
    return $('[data-qa="continue-button"]');
  }

  async checkUrl(path) {
    let currentUrl = await browser.getUrl();
    expect(currentUrl).toBe(`https://www.automationexercise.com/${path}`);
  }
}

/*

*/

export default new AccountPage();
