import { first } from "cypress/types/lodash";
class CreateAnAccountPage {
    elements = {
        firstNameInput: () => cy.get('input[name="firstname"]'),
        lastNameInput: () => cy.get('input[name="lastname"]'),
        emailInput: () => cy.get('input[name="email"]'),
        passwordInput: () => cy.get('input[name="password"]'),
        confirmPasswordInput: () => cy.get('input[name="confirmation"]'),
        createanaccountbuttonInput: () => cy.get("//button[@title='Create an Account']//span[contains(text(),'Create an Account')]"),
        successmessage: () => cy.get("//div[@data-bind='html: $parent.prepareMessageForHtml(message.text)']"),
     };

    createAnAccount(firstName, lastName, email, password, confirmPassword) {
        this.elements.firstNameInput().type(firstName);
        this.elements.lastNameInput().type(lastName);
        this.elements.emailInput().type(email);
        this.elements.passwordInput().type(password);
        this.elements.confirmPasswordInput().type(confirmPassword);
        this.elements.createanaccountbuttonInput().click();
    }

    // selectPaymentMethodRadioButton() {
    //   cy.get('#payment-method-radio-button').click();
    // }
}

export const signup = new CreateAnAccountPage();
