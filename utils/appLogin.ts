import { Browser, Page,expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

export async function getLoggedInPage(browser: Browser): Promise<Page> {
  const context = await browser.newContext({
    httpCredentials: {
      username: process.env.AUTH_USERNAME!,
      password: process.env.AUTH_PASSWORD!
    }
  });

  const page = await context.newPage();
  const loginPage = new LoginPage(page);

  await page.goto(process.env.BASE_URL!);
  await loginPage.login(
    process.env.APP_USERNAME!,
    process.env.APP_PASSWORD!
  );

  await expect(page).toHaveURL(/dashboard/);

  // Wait for dashboard content to really load
  await expect(page.locator('body')).toContainText('Create Campaign');

  return page;
}