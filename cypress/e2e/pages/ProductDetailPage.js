class ProductDetailPage {
    elements = {
      addBtn: () => cy.get('[class="btn btn-success btn-lg"]'),
      cartBtn: () => cy.get('#cartur'),
    };
  
    clickAddToCart() {
      this.elements.addBtn().click();
    }

    clickCart() {
      this.elements.cartBtn().click();
    }

  }
  
  export const productDetailPage = new ProductDetailPage();