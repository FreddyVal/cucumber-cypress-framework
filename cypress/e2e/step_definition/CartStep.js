const {Then, When, Given} = require("@badeball/cypress-cucumber-preprocessor");
const {productDetailPage} = require ('../pages/ProductDetailPage');
const {cartPage} = require ('../pages/CartPage');

Given('El usuario ingresa a {string}', (pagina) => {
    //cy.visit("/") - Visita la pagina definida en cypress.config.js
    cy.visit(pagina)
});

When('Agrega un {string} al carrito de compras desde el modulo de {string}', (producto,modulo) => {
    cy.contains('a', modulo).click()
    cy.contains('a', producto).click()
    cy.wait(2000)
    productDetailPage.clickAddToCart()
    cy.wait(2000)
    productDetailPage.clickCart()
});

Then('El producto {string} se muestra en la opcion del carrito de compras', (producto) => {
    //Validar que se ha agregado solo un elemento al carro
    cartPage.getGridRow().should(($element) => {
        expect($element).to.have.length(1);
    });


    //Validar que el elemento agregado sea el correcto
    cartPage.getGridRowProduct().eq(1).invoke('text').then((text) => {
        expect(text).to.equal(producto);
      });
});

Then('Al eliminar el producto del carrito ya no se muestra',() => {
    cartPage.clickDelete()

    //Validar que no existan elementos en la grilla
    cartPage.getGridRow().should(($element) => {
      expect($element).to.have.length(0);
    });
});