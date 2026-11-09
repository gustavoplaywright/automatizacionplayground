import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';

/*Valida existencia del page catalog.html y que el título sea visible*/
test.describe('Navegación del Catálogo', () => {
  test('Validar navegación al catálogo', async ({ page }) => {
    await page.goto('https://gustavoplaywright.github.io/playgroundweb/catalog.html');
    await expect(page.locator('h1')).toBeVisible();
  });
});

/*Valida que al hacer click en el botón "Cargar más" se carguen más productos*/
test.describe('Cargar más productos', () => {
  test('Validar carga de más productos al hacer click en "Cargar más"', async ({ page }) => { 
        await page.goto('https://gustavoplaywright.github.io/playgroundweb/catalog.html');
    await expect(page.locator('h1')).toBeVisible();
  await page.getByTestId('load-more').click();
  await expect(await page.locator('.product-card').count()).toBeGreaterThanOrEqual(9); // Despues de hacer click cuenta las card
  });
});


/*Aca se valida las card, se ingresa y valida existencia de los textos y los botones de las card*/
test.describe('Validar card de producto', () => {
  test('Validar card de producto', async ({ page }) => {
    await page.goto('https://gustavoplaywright.github.io/playgroundweb/catalog.html');
    await expect(page.locator('h1')).toBeVisible();
    await test.step('Validar card de producto', async () => {
      await page.getByLabel('Ver Kit de bienvenida').click();
      /*Una vez que carga la pagina se abre el popup y valida lo siguiente:*/
      
      await expect(page.getByTestId('product-details-modal')).toBeVisible();
      await expect(page.getByTestId('product-details-modal').getByRole('heading', { name: 'Kit de bienvenida' })).toBeVisible();
      await expect(page.getByTestId('product-details-modal').getByText('Todo lo esencial para empezar a explorar. Precio: $')).toBeVisible();
      await expect(page.getByTestId('product-details-modal').getByRole('button', { name: 'Cerrar detalles' })).toBeVisible();
    }); 

/*Aca valido el botón Listo que me faltaba*/
    await test.step('Validar boton Listo de la card', async () => {
          await page.goto('https://gustavoplaywright.github.io/playgroundweb/catalog.html');
await expect(page.locator('h1')).toBeVisible();
    
    await page.getByLabel('Ver Kit de bienvenida').click();
    await page.getByRole('button', { name: 'Listo' }).click();

  });
});
});

/*Valida que al seleccionar un filtro de categoría se muestren los productos correspondientes*/
test.describe('Filtrar productos por categoría', () => {
  test('Validar filtrado de productos por categoría', async ({ page }) => { 
              await page.goto('https://gustavoplaywright.github.io/playgroundweb/catalog.html');
await expect(page.locator('h1')).toBeVisible();
await test.step('Filtrar productos por categoría', async () => {
  await page.getByTestId('category-filter').selectOption('starter');
 await expect(page.getByText('Kit')).toBeVisible();
await page.getByTestId('category-filter').selectOption('all');
await expect(page.getByText('Kit')).toBeVisible();
await expect(page.getByText('Plan')).toBeVisible();
await expect(page.getByText('Recurso')).toBeVisible();
});
  });
}); 



test('Filtrar catálogo por categoría Kits y validar que solo se muestren kits', async ({ page }) => {
  // 1. Navegar a la página de catálogo
  await page.goto('https://gustavoplaywright.github.io/playgroundweb/catalog.html');

// 2. Seleccionar la opción "Kits" en el selector de categoría
  await page.getByTestId('category-filter').selectOption('Kits');

  // 3. Esperar a que aparezca al menos una tarjeta de producto usando la clase correcta
  const productCards = page.locator('.product-card'); 
  await expect(productCards.first()).toBeVisible();

  // 4. Obtener el total de tarjetas y validar que sea mayor a 0
  const totalCards = await productCards.count();
  expect(totalCards).toBeGreaterThan(0);

  // 5. Recorrer cada tarjeta visible y verificar que contenga el texto "Kit"
  for (let i = 0; i < totalCards; i++) {
    const card = productCards.nth(i);
    await expect(card).toContainText('Kit');
  }
});


test('Filtrar catálogo por categoría Plan y validar que solo se muestren Plan', async ({ page }) => {
  // 1. Navegar a la página de catálogo
  await page.goto('https://gustavoplaywright.github.io/playgroundweb/catalog.html');

// 2. Seleccionar la opción "Plan" en el selector de categoría
  await page.getByTestId('category-filter').selectOption('plans');

  // 3. Esperar a que aparezca al menos una tarjeta de producto usando la clase correcta
  const productCards = page.locator('.product-card'); 
  await expect(productCards.first()).toBeVisible();

  // 4. Obtener el total de tarjetas y validar que sea mayor a 0
  const totalCards = await productCards.count();
  expect(totalCards).toBeGreaterThan(0);

  // 5. Recorrer cada tarjeta visible y verificar que contenga el texto "Plan"
  for (let i = 0; i < totalCards; i++) {
    const card = productCards.nth(i);
    await expect(card).toContainText('Plan');
  }
});


test('Filtrar catálogo por categoría Recursos y validar que solo se muestren Recursos', async ({ page }) => {
  // 1. Navegar a la página de catálogo
  await page.goto('https://gustavoplaywright.github.io/playgroundweb/catalog.html');

// 2. Seleccionar la opción "Recursos" en el selector de categoría
  await page.getByTestId('category-filter').selectOption('resources');

  // 3. Esperar a que aparezca al menos una tarjeta de producto usando la clase correcta
  const productCards = page.locator('.product-card'); 
  await expect(productCards.first()).toBeVisible();

  // 4. Obtener el total de tarjetas y validar que sea mayor a 0
  const totalCards = await productCards.count();
  expect(totalCards).toBeGreaterThan(0);

  // 5. Recorrer cada tarjeta visible y verificar que contenga el texto "Recurso"
  for (let i = 0; i < totalCards; i++) {
    const card = productCards.nth(i);
    await expect(card).toContainText('Recurso');
  }
});