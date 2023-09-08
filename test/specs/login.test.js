import { expect, browser, $ } from '@wdio/globals'

//Test 1: Perform Login

describe('Login saucedemo', () => {
    it('should login using "standard_user"', () => {
        browser.url('https://www.saucedemo.com/');
        
        const usernameField = $('#username');
        const passwordField = $('#password');
        const loginButton = $('login-button');

        usernameField.setValue('standard_user');
        passwordField.setValue('secret_sauce');

        loginButton.click();

        const productsTitle = $('Products');
        expect(productsTitle).toBeDisplayed();

        const cartIcon = $('.shopping_cart_container');
        expect(cartIcon).toBeDisplayed();

        const products = $$('.inventory_list');
        expect(products).toBeElementsArrayOfSize({ gte: 2 });;
    });
});

