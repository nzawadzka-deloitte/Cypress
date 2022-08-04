export class LoginPage {

    static openAutomationPracticeSignInPage(){

        cy.visit("http://automationpractice.com/index.php?controller=authentication&back=my-account");
    }
    static inputAccount() {
        cy.fixture('data.json').then(loginData =>{

            cy.get('#email').type(loginData.email);
            cy.get('#passwd').type(loginData.password);
        })
    }

    static clickLogInButton(){
        cy.get('#SubmitLogin').click();
    }
    static checkIfMyAccountIsOpen(){

        cy.get('.page-heading').contains("My account");

    }
    static clickProduct
}