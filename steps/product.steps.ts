import { Then,When } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Product } from '../pages/product.page';

Then('I will add the backpack to the cart', async () => {
  await new Product(getPage()).addBackPackToCart();
});

Then('I can select the cart', async () => {
  await new Product(getPage()).clickCart()
});

When(/^I sort items by (Price \(high to low\)|Price \(low to high\))$/, async function (sortOption) {
  await new Product(getPage()).sortProduct(sortOption)
});

Then(/^I validate all 6 items are sorted correctly by price (Price \(high to low\)|Price \(low to high\))$/, async function (sortOption) {
await new Product(getPage()).isSort(sortOption)
});