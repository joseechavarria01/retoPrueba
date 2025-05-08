import { Locator, Page } from '@playwright/test'

export class ProductDetailsPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async addProduct(quantity:number) {
        await this.page.fill('input[name="quantity"]',quantity.toString());
        await this.page.waitForTimeout(1000);
        const cartButton: Locator = await this.page.locator('button[class^="single_add_to_cart_button"]');
        await cartButton.waitFor();
        await this.page.locator('button[class^="single_add_to_cart_button"]').click({ force: true });
    }
}