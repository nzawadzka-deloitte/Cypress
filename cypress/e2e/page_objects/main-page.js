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
    
    static clickAddProduct(index){
        let price = Cypress.$('product_list > :nth-child(${index}).price');
        cy.get('[data-index-product=${id}]').contains("Add to cart").click();
    }

    static clickContinueShopping(){

        
    }
}