export class CartPage{
    static openAutomationPracticeCartPage(){
        cy.visit("http://automationpractice.com/index.php?controller=order");
    }

    static findPrice(index, price){
        cy.get('tbody >: nth-child($[index]) .cart_unit > .price .price'). invoke('text').should('eq',price);
    }

    static findFinalPrice(price){
        cy.get('#total_product').invoke('text').should('eq',price);
    }
}