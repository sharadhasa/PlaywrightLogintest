import { test, expect } from '@playwright/test';
import { getLoggedInPage } from '../utils/appLogin';

//test.setTimeout(50000);

test.describe.serial('Campaign UI Suite', () => {
  test('Login - Valid Credentials', async ({ browser }) => {
    const page = await getLoggedInPage(browser);

    await expect(page).toHaveURL(/dashboard/);
     await page.screenshot({
    path: `./screenshots/login-dashboard-${Date.now()}.png`,
    fullPage: true
  });
  });
});