import { Page, Locator } from '@playwright/test';

export class BasePage {

  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async open(url: string) {
    await this.page.goto(url);
  }

  async type(locator: Locator, text: string) {
    await locator.fill(text);
  }

  async click(locator: Locator) {
    await locator.click();
  }
  async getText(locator: Locator) {
    return await locator.innerText();
  }

  async takeScreenshot(fileName: string) {
    await this.page.screenshot({
       path: `./screenshots/${fileName}.png`,
      fullPage: true

 });
  }
}