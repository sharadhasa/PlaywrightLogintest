import { test, expect } from '@playwright/test';
import { getAPIContext } from '../utils/apiHelper';

test.describe.serial('Login API Suite', () => {
  test('Validate Login API', async () => {
    const apiContext = await getAPIContext();

    const response = await apiContext.get('/login');

    const status = response.status();
    const json = await response.json();

    console.log('Status Code:', status);
    console.log('URL:', response.url());
    console.log('Headers:', response.headers());
    console.log('JSON Body:', json);

    expect(response.url()).toContain('/login');
    expect(status).toBe(202);

    expect(json).toHaveProperty('msg');
    expect(json).toHaveProperty('username');
    expect(json).toHaveProperty('role');
    expect(json).toHaveProperty('jwtToken');

    expect(typeof json.msg).toBe('string');
    expect(typeof json.username).toBe('string');
    expect(typeof json.role).toBe('string');
    expect(typeof json.jwtToken).toBe('string');

    await apiContext.dispose();
  });
});