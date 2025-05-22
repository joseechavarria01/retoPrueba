import { Page, expect } from '@playwright/test'

export class CartPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async verifyCart() {
        await expect(this.page.locator('#place_order')).toBeVisible();
    }

    private async verifyCartItems() {
        const items = this.page.locator('.cart-item');
        await expect(items).toHaveCount(2); // validar cantidad de productos
    }

    private async verifyTotalPrice() {
        const totalPrice = this.page.locator('.total-price');
        await expect(totalPrice).toContainText('$250.000'); // validar precio
    }
}