/// <reference = cypress>

describe("Testes da Prova", ()=>{

    function realizarLogin() {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
  }

  function concluirCompra(){
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get('[data-test="checkout"]').click()
    cy.get('[data-test="firstName"]').type('Luiz Otávio')
    cy.get('[data-test="lastName"]').type('Sales')
    cy.get('[data-test="postalCode"]').type('37800000')
    cy.get('[data-test="continue"]').click()
    cy.get('[data-test="finish"]').click()
  }


    it("Teste Login de usuario com sucesso", ()=>{
        realizarLogin()
    })

    it("Teste Login de usuario com Falha", ()=>{
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauc")
        cy.get('[data-test="login-button"]').click()  
    })

    it("Teste de Remover algo do Carrinho", ()=>{
        realizarLogin()
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.get('[data-test="remove-sauce-labs-backpack"]').click()
    })

    it("Teste de concluir uma compra", ()=>{
        concluirCompra()
    })
 
})
