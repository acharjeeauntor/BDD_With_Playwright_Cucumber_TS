Feature: Purchase Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario:  Validate successful purchase text
    Then I will login as 'standard_user'
    Then I will add the backpack to the cart
    Then I can select the cart
    Then I can select Checkout
    Then I can fill '<firstname>' firstname, '<lastname>' lastname, and '<zipcode>' zipcode
    Then I can select Continue
    Then I can select Finish
    Then I should see 'Thank you for your order!'

    Examples:
      | firstname | lastname | zipcode |
      | John      | Doe      | 43444   |
      | Justin    | Time     | 323344  |
      | Oscar     | Lott     | 122323  |