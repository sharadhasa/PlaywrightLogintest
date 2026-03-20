import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {

  username: Locator;
  password: Locator;
  signInButton: Locator;

  constructor(page: Page) {

    super(page);

    this.username = page.locator('#username');
    this.password = page.locator('#inputPassword');
    this.signInButton = page.getByRole('button', { name: 'Sign In' });

  }

  async login(username: string, password: string) {

    await this.type(this.username, username);
    await this.type(this.password, password);
    await this.click(this.signInButton);

  }

}