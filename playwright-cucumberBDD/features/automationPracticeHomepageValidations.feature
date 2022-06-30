Feature: Validating Automation Practice Home Page
  As a user I want to Validate The Automation Practice Home Page

  Scenario: Validating Automation Practice Home Page Fields
    Given I Navigate To The Automation Practice Home Page
    Then I Should See The "Sign out" Element On Home Page
    Then I Should See The "My account" Element On Home Page
    Then I Should See The Search Input Element
    Then I Should See The Back To Home Button
#    Then I should see the environment dropdown