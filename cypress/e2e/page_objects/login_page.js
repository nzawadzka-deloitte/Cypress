export class LoginPage {

    static openAutomationPracticeSignInPage(){

        cy.visit("http://automationpractice.com/index.php?controller=authentication&back=my-account");
    }
    static enterEmail(){
        cy.fixture('data.json').then(loginData=>{
             cy.get('#email').type(loginData.email)
        })
       
    }
    static enterPassword(){
        cy.fixture('data.json').then(loginData=>{
             cy.get('#passwd').type(loginData.password)
        })
       
    }

    static clickLogInButton(){
        cy.get('#SubmitLogin').click();
    }
    static checkIfMyAccountIsOpen(name){

        cy.get('.myaccount-link-list').contains(name).click();

    }

}