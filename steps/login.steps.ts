import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Login } from '../pages/login.page';

Then('I should see the title {string}', async (expectedTitle) => {
  await new Login(getPage()).verifyTitle(expectedTitle);
});
Then('I should see a error {string}', async (expected) => {
  await new Login(getPage()).verifyError(expected);
});

Then('I will login as {string}', async (userName) => {
  await new Login(getPage()).loginUser(userName);
});