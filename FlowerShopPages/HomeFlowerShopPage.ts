import { Page } from '@playwright/test'

export class HomeFlowerShopPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async selectProduct(product: string) {
        await this.page.waitForSelector('[class="vc_tta-panel-body"]', { state: 'visible' });
        await this.page.getByText(product).click();
    }
}