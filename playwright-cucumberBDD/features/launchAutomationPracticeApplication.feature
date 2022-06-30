Feature: Launching Automation Practice Application
  As a user I want to Launch The Automation Practice Application

  Scenario: Launch And Validate Automation Practice Landing Page
    Given I Navigate To The Automation Practice Page
    Then I Should See The "Contact us" Element On Landing Page
    Then I Should See The "Sign in" Element On Landing Page
    Then Shopping Cart Element Should Be Present

    Scenario: Validate Automation Practice Login Page
      Given I Navigate To The Automation Practice Page
      When I Click On The Sign In Element
      Then I Should See The Create Account Section
      And I Should See The Already Registered Section

    Scenario: Login To Automation Practice Application
      Given I Am On The Automation Practice Login Page
      And I Enter My Email Address
      And I Enter My Password
      When I Click On The Sign Button
      Then I Should Navigate To The Automation Practice Home Page


