import { Page, Locator } from '@playwright/test';
import { BasePage } from './base.page';

export class HomePage extends BasePage {
  // Selectores encapsulados como locators
  readonly pageTitle: Locator;

  constructor(page: Page) {
    super(page);
    // Ajustá este selector según el título/encabezado de tu index.html
    this.pageTitle = page.locator('h1'); 
  }

  async open(): Promise<void> {
    await this.navigateTo('/index.html');
  }
}