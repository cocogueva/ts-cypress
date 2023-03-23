// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import { Module } from "./types"
declare global {
    namespace Cypress {
        interface Chainable {
            pickMenuItem(input:Module):
            Chainable<any>
        }
    }
}

Cypress.Commands.add('pickMenuItem',
(input:Module)=>{
    cy.log(input)
    return cy.get(`.oxd-main-menu-item[href='/web/index.php/${input}`,{timeout:5000}).click()
})