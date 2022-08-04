/// <reference types="cypress" />

import {MainPage} from "../page_objects/main-page"
import {LoginPage} from "../page_objects/login_page"


context('e-shop go to', () => {

  beforeEach(() => {    

    MainPage.openAutomationPracticePage();
  })
  describe('Logging in', () => {
    before(function() {
      cy.fixture('data.json').then(function(loginData){
        this.loginData = loginData 
      })
    })

    it('should Log in', () => {
      MainPage.clickSignButton();
      LoginPage.inputAccount();
      LoginPage.clickLogInButton();
      LoginPage.checkIfMyAccountIsOpen();

    })
  })


  describe('menu bar', () => {

    it('should open category: Women', () => {

    })

    it('should open cart page', () => {

     })

     it('log in, ')

  })
})