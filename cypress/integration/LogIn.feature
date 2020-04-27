Feature: Automation Practice Sign in

I want to test Sign-in
Background:
  Given I am in the homepage
  Then I see 'My Store' in the title
  When I click the Sign in button
  Then I should redirect to Login page

Scenario: Sign in with invalid credentials
  Given I am in login page
  When I fill in Email address with 'giulia.deiulis@gmail.com'
  And  I fill in Password with 'testnotvalid'
  And  I click Sign in button
  Then I should redirect to authentication page

Scenario: Sign in with valid credentials
  Given I am in login page
  When I fill in Email address with 'giulia.deiulis@gmail.com'
  And  I fill in Password with 'test1234'
  And  I click Sign in button
  Then I should redirect to account page
