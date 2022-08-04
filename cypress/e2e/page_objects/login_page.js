export class LoginPage {

    static openAutomationPracticeSignInPage(){

        cy.visit("http://automationpractice.com/index.php?controller=authentication&back=my-account");
    }
    static inputAccount(login, password) {
        cy.get('input#email').type(login);
        cy.get('input#passwd').type(password);
    }

    static clickLogInButton(){
        cy.get('#SubmitLogin').click();
    }
    static checkIfMyAccountIsOpen(){

        cy.get('.page-heading').contains("My account");

    }
    static clickProduct
}