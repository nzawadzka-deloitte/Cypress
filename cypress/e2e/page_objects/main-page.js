export class MainPage {

   
    static openAutomationPracticePage(){
        cy.visit("http://automationpractice.com/index.php");
    }

    static clickCategory(name){
        cy.get('#block_top_menu').contains(name).click();
    }

    static clickShoppingCart(){
        cy.get('.shopping_cart').contains("Cart").click();

    }

    static clickSignButton(){
        cy.get(".login").contains("Sign in").click();
    }
    
    static clickAddProduct(name){
        cy.get(".produkt_list").find(".product-container").contains(name).parent('.product-container').contains('Add to cart').click();
    
    }

    static clickContinueShopping(){
        cy.get('button-medium').contains("Proceed").click();
    }
}