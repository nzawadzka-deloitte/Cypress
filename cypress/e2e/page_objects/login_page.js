export class LoginPage {

    static openAutomationPracticeSignInPage(){

        cy.visit("http://automationpractice.com/index.php?controller=authentication&back=my-account");
    }
    static inputAccount() {
        cy.get('input#email').type('zawadzka0000@gmail.com');
        cy.get('input#passwd').type('natalia123');
    }

    static clickLogInButton(){
        cy.get('#SubmitLogin').click();
    }
    static checkIfMyAccountIsOpen(){

        cy.get('.page-heading').contains("My account");

    }
}