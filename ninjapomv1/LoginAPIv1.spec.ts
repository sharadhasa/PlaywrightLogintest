import { test, expect } from '@playwright/test';
import { getAPIContext } from '../utils/apiHelper';
import { invalidUsers } from '../test_data/apiData';

test.describe('Login API Suite', () => {

  // ✅ VALID LOGIN
  test('Valid Login API', async () => {
    const apiContext = await getAPIContext();

    const response = await apiContext.get('/login');

    const status = response.status();
    const json = await response.json();

    console.log('Valid Login Status:', status);
    console.log('Response:', json);

    expect(status).toBe(202);

    await apiContext.dispose();
  });

  // ✅ INVALID LOGIN (DATA-DRIVEN)
  invalidUsers.forEach((user, index) => {
    test(`Invalid Login API - Scenario ${index + 1}`, async () => {

      const apiContext = await getAPIContext(user.username, user.password);

      const response = await apiContext.get('/login');

      const status = response.status();
      const body = await response.text();

      console.log(`Scenario ${index + 1}`);
      console.log('Status:', status);
      console.log('Body:', body);

      expect(status).toBeGreaterThanOrEqual(400);

      await apiContext.dispose();
    });
  });

});