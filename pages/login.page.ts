import { Page } from "@playwright/test"

export class Login {
    private readonly page: Page
    private readonly commonPassword: string = 'secret_sauce'
    private readonly errorField: string = '[data-test="error"]'
    private readonly passwordField: string = '[data-test="password"]'
    private readonly userNameField: string = '[data-test="username"]'
    private readonly loginBtn: string = '[data-test="login-button"]'

    constructor(page: Page) {
        this.page = page;
    }

    public async verifyTitle(expectedTitle: string) {
        const pageTitle = await this.page.title();
        if (pageTitle !== expectedTitle) {
            throw new Error(`Expected title to be ${expectedTitle} but found ${pageTitle}`);
        }
    }

    public async verifyError(expected: string) {
        const actual = await this.page.locator(this.errorField).textContent();
        if (actual !== expected) {
            throw new Error(`Expected error message to be ${expected} but found ${actual}`);
        }
    }

    public async loginUser(userName: string) {
        await this.page.locator(this.userNameField).fill(userName)
        await this.page.locator(this.passwordField).fill(this.commonPassword)
        await this.page.locator(this.loginBtn).click()
    }
}