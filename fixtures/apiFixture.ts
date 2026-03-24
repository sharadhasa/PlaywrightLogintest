import { test as base, expect } from '@playwright/test';
import type { APIRequestContext } from '@playwright/test';
import { getAPIContext } from '../utils/apiHelper';

type ApiFixtures = {
  apiContext: APIRequestContext;
};

export const test = base.extend<ApiFixtures>({
  apiContext: async ({}, use) => {
    const context = await getAPIContext();
    await use(context);
    await context.dispose();
  }
});

export { expect };