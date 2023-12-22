import { Page, expect } from "@playwright/test"

export class Checkout {
    private readonly page: Page
    private readonly checkoutBtn: string = '[data-test="checkout"]';
    private readonly firstName: string = '[data-test="firstName"]';
    private readonly lastName: string = '[data-test="lastName"]';
    private readonly postalCode: string = '[data-test="postalCode"]';
    private readonly continueBtn: string = '[data-test="continue"]';
    private readonly finishBtn: string = '[data-test="finish"]';
    private readonly confirmMessage: string = 'h2.complete-header';

    constructor(page: Page) {
        this.page = page;
    }
    public async enterCheckoutInfo(firstName: string, lastName: string, postalCode: string) {
        await this.page.locator(this.firstName).fill(firstName);
        await this.page.locator(this.lastName).fill(lastName);
        await this.page.locator(this.postalCode).fill(postalCode);
    }
    public async verifyConfirmationMessage(expected: string) {
        await expect(this.page).toHaveURL(/.*\/checkout-complete.html/);
        await expect(this.page.locator(this.confirmMessage)).toContainText(expected);
    }
    public async clickCheckoutBtn(){
        await this.page.locator(this.checkoutBtn).click()
    }

    public async clickFinishBtn(){
        await this.page.locator(this.finishBtn).click()
    }

    public async clickContinueBtn(){
        await this.page.locator(this.continueBtn).click();
    }
}