/// <reference types="cypress" />

import {MainPage} from "../page_objects/main-page"
import {LoginPage} from "../page_objects/login_page"
import {CartPage} from "../page-objects/cart_page"


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

  describe('card page', () => {
    it('should add elements to cart', () =>{
      let product1, product2, total;
      MainPage.openAutomationPracticePage();
      product1 = MainPage.clickAddProduct();
      MainPage.clickContinueShopping();
      product2 = MainPage.clickAddProduct();

      total = Number(price1+price2)
      CartPage.findPrice(1, price1);
      CartPage.findPrice(2, price2);

      CartPage.findFinalPrice(total);
    })
  })
})