Feature: Automation Practice Shopping Cart

  I want to test Shopping Cart

Scenario: Testing Shopping Cart
  Given I am in the homepage
  Then I see 'My Store' in the title
  When I search for 'black dress'
  Then I should see all the result
  And I add to cart the first dress
  And I add to cart the second dress
  When I click on Proceed checkout
  Then I should redirect to order page

  Given I am in the order page
  When I change the quantity of the second dress to 2
  And I remove the first item
  Then I click on Proceed checkout again
  Then I should redirect to authentication page
