import { Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

export async function loginToApp(page: Page) {

  const loginPage = new LoginPage(page);

  await page.goto(process.env.BASE_URL!);

  await loginPage.login(
    process.env.APP_USERNAME!,
    process.env.APP_PASSWORD!
  );
}