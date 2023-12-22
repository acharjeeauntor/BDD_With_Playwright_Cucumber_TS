import { Given, When, Then } from "@cucumber/cucumber";
import { getPage } from "../playwrightUtilities";


Given('I open the {string} page', async (url) => {
    await getPage().goto(url);
  });

  