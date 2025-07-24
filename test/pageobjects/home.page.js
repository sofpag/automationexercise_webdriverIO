import { $ } from "@wdio/globals";
import Page from "./page.js";

class HomePage extends Page {
  get homeBtn() {
    return $('li [href~="/"]]');
  }

  get loginBtn() {
    return $('[href~="/login"]');
  }

  get title() {
    return $("h2=Features Items");
  }

  get deleteBtn() {
    return $(`[href="/delete_account"]`);
  }

  get username() {
    return $("a b");
  }
}

export default new HomePage();
