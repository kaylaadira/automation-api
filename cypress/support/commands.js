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

Cypress.Commands.add('apiRequest', (method, endpoint, options = {}) => {
    cy.request({
        method,
        url: `${Cypress.env('baseUrl') || 'https://gorest.co.in/'}${endpoint}`,
        headers: {
            'x-api-key': 'reqres-free-v1',
            'Authorization': 'Bearer 3ac40918d5aacd6fdc0591c3f98aea2832557b209628f55d83778e4ef17a35b2',
            ...options.headers,
        },
        body: options.body,
        ...options,
    });
});
