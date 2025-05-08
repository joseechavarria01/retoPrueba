import { Page } from '@playwright/test'

export class CommonPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async returnToStore() {
        await this.page.goto("/")
    }
}