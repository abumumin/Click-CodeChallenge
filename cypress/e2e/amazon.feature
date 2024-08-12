Feature: Amazon Application
As a user I should be able to to interact with the Amazon Application
    
    
    Scenario: A user should be able to Get the lowest Price of Computer accessories and Log the price
        Given I launch the app
        When I search for a product by name and validate search result
        And I Apply filter by brand and verify filtered result
        And I add product to card and validate product added to cart
       Then I checkout and validate each step in the process without payment
       
