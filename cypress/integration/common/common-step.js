import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
const signinButtonSel = "div[class='header_user_info']"
const emailInputSel = '#email'
const pwdInputSel = '#passwd'
const submitLoginSel = 'button[class="button btn btn-default button-medium"]'

Given(`I am in the homepage`, () => {
  
});

Then(`I see {string} in the title`, title => {
  cy.title().should("include", title);
});

When(`I click the Sign in button`, () => {
  cy.get(signinButtonSel).click()
});

Then(`I should redirect to Login page`, () => {

});

Given(`I am in login page`, () => {

});

When(`I fill in Email address with {string}`, email => {
  cy
  .get(emailInputSel).focus()
  .get(emailInputSel).type(email)
});

And(`I fill in Password with {string}`, pwd => {
  cy
    .get(pwdInputSel).focus()
    .get(pwdInputSel).type(pwd)
});

And(`I click Sign in button`, () => {
  cy.get(submitLoginSel).click()

});

Then(`I should redirect to authentication page`, () => {
  cy.location().should((loc) => {
    expect(loc.search).to.contain('?controller=authentication')
  })
});
