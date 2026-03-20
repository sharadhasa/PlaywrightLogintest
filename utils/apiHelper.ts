import { APIRequestContext, request } from '@playwright/test';

export async function getAPIContext(): Promise<APIRequestContext> {
  return await request.newContext({
    baseURL: process.env.BASE_URL,
    httpCredentials: {
      username: process.env.AUTH_USERNAME!,
      password: process.env.AUTH_PASSWORD!
    },
    extraHTTPHeaders: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  });
}