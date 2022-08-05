export class WomenPage{

    static openWomenCategory(){
        cy.get('#block_top_menu').contains("Women").click();
    }

    static checkIfWomenCategoryIsOpen(){
        cy.get('#center_column > h1').contains('Women');
    }
    
   
}