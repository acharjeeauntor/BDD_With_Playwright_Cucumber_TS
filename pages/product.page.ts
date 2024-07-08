import { Page,expect } from "@playwright/test"

export class Product {
    private readonly page: Page
    private readonly addToCart: string = '[data-test="add-to-cart-sauce-labs-backpack"]'
    private readonly cartBtn: string = '#shopping_cart_container';
    private readonly sortDropDown:string = '[data-test="product-sort-container"]'
    private readonly productPrice:string='[data-test="inventory-item-price"]'

    constructor(page: Page) {
        this.page = page;
    }

    public async addBackPackToCart() {
        await this.page.locator(this.addToCart).click()
    }
    public async clickCart() {
        await this.page.locator(this.cartBtn).click()
    }
    public async sortProduct(option: any){
        await this.page.locator(this.sortDropDown).selectOption({label:option})
    }
    public async isSort(sortOption: string): Promise<void> {
        const totalProducts = await this.page.locator(this.productPrice).count();
        const prices: number[] = [];
      
        for (let i = 0; i < totalProducts; i++) {
          const price =  await this.page.locator(this.productPrice).nth(i).textContent();
          if (price) {
            const finalPrice = parseFloat(price.replace('$', ''));
            prices.push(finalPrice);
          }
        }
        const sortedPrices = sortOption === 'Price (low to high)' 
          ? [...prices].sort((a, b) => a - b)
          : [...prices].sort((a, b) => b - a);
        expect(prices).toEqual(sortedPrices);
    }
}