// Import Cypress commands
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { loginPage } from '@pages/LoginPage'
import { signup } from '@pages/CreateAnAccountPage'


// Step definition for navigating to the Magento Luma page
Given('A web browser is at the Magento Luma page', () => {
    cy.visit('/'); // Replace with the actual URL
});

// Step definition for providing valid account details and clicking the "Create An Account" button
When('A user provides valid account details and clicks on the "Create An Account" button', (dataTable) => {
    // Extracting data from the data table
    const data = dataTable.rowsHash();
    cy.log(data.firstName);
    cy.log(data.lastName);
    cy.log(data.email);
    cy.log(data.password);
    cy.log(data.confirmPassword);
    signup.createAnAccount(data.firstName, data.lastName, data.email, data.password, data.confirmPassword)

});

// Step definition for verifying successful account creation
Then('The user should be able to create an account successfully', () => {
    // Verify that the user is redirected to the account dashboard or a success message is displayed
    cy.url().should('include', '/customer/account'); // Adjust the URL as needed
    signup.elements.successmessage().should('contain', 'Thank you for registering with Main Website Store.'); // Adjust the selector and message as needed
});

