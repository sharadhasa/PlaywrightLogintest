import { APIRequestContext, request } from '@playwright/test';

export async function getAPIContext(
  username?: string,
  password?: string
): Promise<APIRequestContext> {
  return await request.newContext({
    baseURL: process.env.BASE_URL,
    httpCredentials: {
      username: username ?? process.env.AUTH_USERNAME!,
      password: password ?? process.env.AUTH_PASSWORD!
    },
    extraHTTPHeaders: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  });
}