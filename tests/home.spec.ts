import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';

test.describe('Pruebas de navegación - Home', () => {
  test('Debe cargar la página principal correctamente', async ({ page }) => {
    const homePage = new HomePage(page);
    
    await homePage.open();
    
    // Verificación de URL y carga
    await expect(page).toHaveURL(/.*index.html/);
    await expect(homePage.pageTitle).toBeVisible();
  });
});