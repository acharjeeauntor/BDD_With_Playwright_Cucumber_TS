import { Page } from "@playwright/test"

export class Product {
    private readonly page: Page
    private readonly addToCart: string = '[data-test="add-to-cart-sauce-labs-backpack"]'
    private readonly cartBtn: string = '#shopping_cart_container';

    constructor(page: Page) {
        this.page = page;
    }

    public async addBackPackToCart() {
        await this.page.locator(this.addToCart).click()
    }
    public async clickCart() {
        await this.page.locator(this.cartBtn).click()
    }
}