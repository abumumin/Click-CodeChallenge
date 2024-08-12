import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"

Given(/^I launch the app$/, () => {
  cy.visit('/')
});

When(/^I search for a product by name and validate search result$/, () => {
  cy.fixture('selectors').then((sel) => {
    cy.typeAText(sel.searchFiled, sel.searchText)
    cy.clickElement(sel.searchButton)
    cy.contains("Lenovo").should('be.visible');
    cy.get('h2').should('contain.text', 'Lenovo')
  });
});

When(/^I Apply filter by brand and verify filtered result$/, () => {
  cy.fixture('selectors').then((sel) => {
    cy.clickElement(sel.brand)
    cy.clickElement(sel.brand1)
    cy.clickElement(sel.brand2)
      .should('be.visible') // Ensuring the element is visible
      .contains('Lenovo') // A Check if the text "Lenovo" is present within the element
      .should('exist'); // Assertion that the text exists
      cy.get('.a-box.a-last > .a-box-inner').invoke('text').then((amountText) => {
       
        const amount = parseFloat(amountText.replace(/[^0-9.-]+/g, ""));
        
        // Validation assertion here
        expect(amount).to.be.a('$304'); //  Check if it's a valid amount $304
       
      });
  });
});

Then(/^I add product to card and validate product added to cart$/, () => {
  cy.fixture('selectors').then((sel) => {
    cy.clickElement(sel.addToCart3)
      .should('be.visible') // Ensuring the element is visible
      .contains('Add to Cart') // Check if the text "Lenovo" is present within the element
      .should('exist'); // Assertion that the text exists

    cy.clickElement(sel.goToCartButton)
    cy.contains('Go to Cart')
      .should('be.visible') // Ensuring the button is visible
      .click(); 

    cy.get(sel.validation)
      .invoke('text')
      .then((text) => {
        // Loging the text to the console
        const trimmedText = text.trim();
        cy.log('Text found:', trimmedText);
        console.log('Text found:', trimmedText);
      });
  });
  Then(/^I checkout and validate each step in the process without payment$/, () => {
    cy.fixture('selectors').then((sel) => {


      cy.clickElement(sel.proceedToCheckoutButton)
      cy.typeAText(sel.addressFiled, sel.addressText)
      cy.typeAText(sel.cityFiled, sel.cityText)
      cy.typeAText(sel.zipCodeField, sel.zipcodeText)
      // Locating the element and log its value
      cy.get('div#spc-order-summary')
        .invoke('text') // Retrieve the text content of the element
        .then((text) => {
          // Loging the text to the console
          const trimmedText = text.trim();
          cy.log('Value found:', trimmedText);
          console.log('Value found:', trimmedText);
        });

      cy.get('div#spc-order-summary')
        .invoke('text') // Getting the text content of the element
        .then((text) => {
          
          const amount = text.trim();

          // Logging the amount to the console
          cy.log('Amount found:', amount);
          console.log('Amount found:', amount);

          // Optionally, validate the amount
          expect(amount).to.eq("$304.99");
        });
    });
  });
});



