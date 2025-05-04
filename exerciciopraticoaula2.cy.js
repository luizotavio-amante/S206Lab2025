/// <reference = cypress>

describe("Testes da criação, registro, login e exclusão", () => {
    let infos = []

    beforeEach(() => {
        // Gerar usuário único por horário
        let hora = new Date().getHours().toString()
        let minuto = new Date().getMinutes().toString()
        let seg = new Date().getSeconds().toString()
        let ID = hora + minuto + seg + "ID"
        let Senha = hora + minuto + seg + "Senha"
        infos = [ID, Senha]

        // Criar usuário
        cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
        cy.get('.btn-link').click()
        cy.get('#firstName').type(ID)
        cy.get('#Text1').type(ID)
        cy.get('#username').type(ID)
        cy.get('#password').type(Senha)
        cy.get('.btn-primary').click()
        cy.get('.ng-binding').should("contain.text", "Registration successful")
    })

    it("Teste de login com sucesso", () => {
        cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
        cy.get('#username').type(infos[0])
        cy.get('#password').type(infos[1])
        cy.get('.btn-primary').click()
        cy.get('h1.ng-binding').should("contain.text", infos[0])
    })

    it("Teste de exclusão e falha no login", () => {
        // Login com usuário criado
        cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
        cy.get('#username').type(infos[0])
        cy.get('#password').type(infos[1])
        cy.get('.btn-primary').click()

        // Excluir usuário
        cy.get('.ng-binding > a').click()

        // Voltar para tela de login e tentar novamente
        cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
        cy.get('#username').type(infos[0])
        cy.get('#password').type(infos[1])
        cy.get('.btn-primary').click()

        // Verificar falha no login (não aparece o h1 com o nome)
        cy.get('.alert-danger').should("contain.text", "Username or password is incorrect")
    })
})
