import { $ } from "@wdio/globals";
import Page from "./page.js";

class SignupPage extends Page {
  get title() {
    return $("h2=Enter Account Information");
  }

  get titleMr() {
    return $("#uniform-id_gender1");
  }

  get titleMrs() {
    return $("#uniform-id_gender2");
  }

  get nameInput() {
    return $("#name");
  }

  get emailInput() {
    return $("#email");
  }

  get passwordInput() {
    return $("#password");
  }

  get newsletterCheckbox() {
    return $("#newsletter");
  }

  get specialOffersCheckbox() {
    return $("#optin");
  }

  get firstNameInput() {
    return $("#first_name");
  }

  get lastNameInput() {
    return $("#last_name");
  }

  get addressInput() {
    return $("#address1");
  }

  get stateInput() {
    return $("#state");
  }

  get cityInput() {
    return $("#city");
  }

  get zipcodeInput() {
    return $("#zipcode");
  }

  get mobileNumberInput() {
    return $("#mobile_number");
  }

  get submitBtn() {
    return $("[data-qa='create-account']");
  }

  async completeAccountInfo(titleGender, password, BDDay, BDMonth, BDYear) {
    let option = titleGender;

    switch (option) {
      case "Mr":
        option = this.titleMr.click();
        break;
      case "Mrs":
        option = this.titleMrs.click();
        break;
      default:
        console.log("new title option added");
        false;
    }

    await this.passwordInput.setValue(password);

    await $(`#days [value~="${BDDay}"]`).click();
    await $(`#months [value~="${BDMonth}"]`).click();
    await $(`#years [value~="${BDYear}"]`).click();

    await this.newsletterCheckbox.click();
    await this.specialOffersCheckbox.click();
  }

  async completeAddressInfo(
    firstName,
    lastName,
    street,
    country,
    state,
    city,
    zipcode,
    mobilePhone
  ) {
    await this.firstNameInput.setValue(firstName);
    await this.lastNameInput.setValue(lastName);
    await this.addressInput.setValue(street);
    // await $(`#country`).click();
    await $(`#country [value~="${country}"]`).click();
    await this.stateInput.setValue(state);
    await this.cityInput.setValue(city);
    await this.zipcodeInput.setValue(zipcode);
    await this.mobileNumberInput.setValue(mobilePhone);
    await this.submitBtn.click();
  }
}

export default new SignupPage();
