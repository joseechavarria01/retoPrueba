import { Page, expect } from '@playwright/test'

export class CartPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async verifyCart() {

        expect(this.page.locator('[id="place_order"]').isVisible).toBeTruthy();
      }
}