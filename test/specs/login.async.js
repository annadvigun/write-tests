//Test 1: Perform Login (async)

describe('Login saucedemo', () => {
    it('should login using "standard_user"', async () => {
        await browser.url('https://www.saucedemo.com/');

        const usernameField = $('#user-name');
        const passwordField = $('#password');
        const loginButton = $('#login-button');

        await usernameField.setValue('standard_user');
        await passwordField.setValue('secret_sauce');

        await loginButton.click();

        const productsTitle = $('Products');
        expect(productsTitle).toBeDisplayed();

        const cartIcon = $('.shopping_cart_container');
        expect(cartIcon).toBeDisplayed();

        const products = await $$('.inventory_item');
        await browser.waitUntil(() => products.length >= 2, {
        timeout: 5000,
        timeoutMsg: 'Expected at least 2 products to be present',
    });

    expect(products.length).toBeGreaterThanOrEqual(2);
  });
});


