import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Checkout } from '../pages/checkout.page';


Then('I can select Checkout', async () => {
  await new Checkout(getPage()).clickCheckoutBtn()
});

Then('I can fill {string} firstname, {string} lastname, and {string} zipcode', async (firstname,lastname,zipcode) => {
  await new Checkout(getPage()).enterCheckoutInfo(firstname,lastname,zipcode)
});

Then('I can select Continue', async () => {
  await new Checkout(getPage()).clickContinueBtn()
});

Then('I can select Finish', async () => {
  await new Checkout(getPage()).clickFinishBtn()
});

Then('I should see {string}', async (expected) => {
  await new Checkout(getPage()).verifyConfirmationMessage(expected);
});