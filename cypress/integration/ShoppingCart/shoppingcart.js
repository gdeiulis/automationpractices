import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

When('I search for {string}', searchString => {
  cy
  .get("#search_query_top")
  .should('be.visible')
  .type(searchString)
  .get("button[name='submit_search']")
  .should('be.visible')
  .click()
});

Then('I should see all the result', ()=> {
  cy.get("div[class='product-image-container']").should(($lis) => {
    expect($lis).not.to.have.length(0)
  })
});

Given('I am in the order page', ()=> {

});

And('I add to cart the first dress', ()=> {
  cy
    .get("div[class='product-image-container']").eq(0).trigger('mouseover')
    .get("a[class='button ajax_add_to_cart_button btn btn-default']>span").eq(0).click()
    .get("span[title='Continue shopping']").should('be.visible').click()
});

And('I add to cart the second dress', ()=> {
  cy
  .get("div[class='product-image-container']").eq(1).trigger('mouseon')
  .get("a[class='button ajax_add_to_cart_button btn btn-default']>span").eq(1).click()

});

And('I click on Proceed checkout', ()=> {
  cy.get("a[title='Proceed to checkout']").click()
});

Then(`I should redirect to order page`, () => {
  cy.location().should((loc) => {
  expect(loc.search).to.eq('?controller=order')
  })
});

And('I change the quantity of the second dress to {int}', quant => {
  cy
  .get("input[class='cart_quantity_input form-control grey']").eq(1).focus()
  .get("input[class='cart_quantity_input form-control grey']").eq(1).type(quant,{force:true});
});

And('I remove the first item', () => {
 cy.get("a[class='cart_quantity_delete']").eq(0).click({force:true})
});

And('I click on Proceed checkout again', ()=> {
  cy.get("a[class='button btn btn-default standard-checkout button-medium']").click()
});
