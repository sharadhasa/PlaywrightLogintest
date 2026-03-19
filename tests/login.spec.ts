import { test, expect } from '@playwright/test';
//test.setTimeout(70000);

test('Login - valid credentials', async ({ page }) => {
  await page.goto('https://selenium-prd.firebaseapp.com/');

  await page.locator('#email_field').fill('admin123@gmail.com');
  await page.locator('#password_field').fill('admin123');

  await page.getByRole('button', { name: /login/i }).click();

  await page.getByRole('link', { name: 'Home' }).click();


  const city = page.locator('#city');


  
  await city.selectOption('mumbai');
  //await page.selectOption('#city', ['mumbai', 'goa']);


  await page.getByText('Switch To').hover();
  
  await page.locator('a[href="./alert.html"]').click();

  await expect(page.getByRole('button', { name: 'Window Alert' })).toBeVisible();

  page.on('dialog', async dialog => {
    console.log('dialog opened');
    console.log(dialog.message());
    await dialog.accept();
    console.log('dialog accepted');
  });

  

  await page.getByRole('button', { name: 'Window Alert' }).click();

});

