class CartPage {
    elements = {
      gridRow: () => cy.get('.success'),
      gridRowProduct: () => cy.get('.success td'),
      deleteBtn: () => cy.contains('a', 'Delete'),
    };

    getGridRow() {
        return this.elements.gridRow();
    }
  
    getGridRowProduct() {
        return this.elements.gridRowProduct();
    }

    clickDelete() {
        this.elements.deleteBtn().click();
    }
  }
  
  export const cartPage = new CartPage();