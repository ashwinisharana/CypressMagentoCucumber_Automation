Feature: Create an Account (Sign-Up Flow)

  Background:
    Given A web browser is at the Magento Luma page

  Scenario: Successful Account Creation
    When A user provides valid account details and clicks on the "Create An Account" button
      | firstName | lastName | email                     | password   | confirmPassword |
      | Ashwini   | DD       | ashwini89717@gmail.com    | Test@1234  | Test@1234       |
    Then The user should be able to create an account successfully

#   Scenario: Failed Account Creation due to Invalid Email
#     When A user provides invalid account details and clicks on the "Create An Account" button
#       | First Name | Last Name | Email                   | Password   | Confirm Password |
#       | test       | test      | ashwini89717gmail.com   | Test@1234  | Test@1234       |
#     Then An error message should be displayed on the page
