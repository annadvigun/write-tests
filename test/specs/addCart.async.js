//Test 2: Add to Cart(async)

describe('Add product to the cart', () => {
    it('should add product to the cart and then remove it', async () => {
        // Add product to the cart
        const addToCartButton = $$('.add-to-cart-sauce-labs-backpack')[0]; 
        await addToCartButton.click();

        // Verify Shopping Cart icon contains the number of products added (equal 1)
        const cartIcon = $('.shopping_cart_container'); 
        await expect(cartIcon).toHaveText('1');

        // Open Shopping Cart
        const shoppingCartLink = $('.shopping_cart_link'); 
        await shoppingCartLink.click();

        // Verify the added product is displayed
        const productNameOnProductPage = await $$('.inventory_item_name')[0].getText(); 
        const productNameOnCartPage = await $('div.inventory_item_label > a > div').getText(); 
        await expect(productNameOnCartPage).toEqual(productNameOnProductPage);

        // Remove the product by clicking Remove
        const removeButton = $('.remove-sauce-labs-backpack');
        await removeButton.click();

        // Verify no products are available in the Shopping Cart
        const emptyCart = $('.removed_cart_item'); 
        await expect(emptyCart).toBeDisplayed();
    });
});

