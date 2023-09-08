import { expect, browser, $ } from '@wdio/globals'

//Test 2: Add Product to the Cart

describe('Add product to the cart', () => {
    it('should add product to the cart and then remove it"', () => {

        const addToCartButton = $$('.add-to-cart-sauce-labs-backpack')[0]; 
        addToCartButton.click();

        const cartIcon = $('.shopping_cart_container'); 
        expect(cartIcon).toHaveText('1');
        
        //Open shopping cart
        const shoppingCartLink = $('.shopping_cart_link'); 
        shoppingCartLink.click();

        const productNameOnProductPage = $$('Sauce Labs Backpack')[0].getText(); 
        const productNameOnCartPage = $('Sauce Labs Backpack').getText(); 
        expect(productNameOnCartPage).toEqual(productNameOnProductPage);

        //remove product

        const removeButton = $('.remove-sauce-labs-backpack');
        removeButton.click();
        
        const emptyCart = $('.removed_cart_item'); 
        expect(emptyCart).toBeDisplayed();

    });
});

