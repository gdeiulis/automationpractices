import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Then(`I should redirect to account page`, () => {
  cy.location().should((loc) => {
  expect(loc.search).to.eq('?controller=my-account')
  })
});
