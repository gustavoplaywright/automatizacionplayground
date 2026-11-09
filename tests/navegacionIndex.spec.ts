import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';

/* Valido que la navegación al index.hml funciona*/

test.describe('Pruebas de navegación - Home', () => {
  test('Debe cargar la página principal correctamente', async ({ page }) => {
    await page.goto('https://gustavoplaywright.github.io/playgroundweb/index.html');
    await expect(page.locator('h1')).toBeVisible();
  });
});

/*Navegacion del navbar a la página catalogo.html*/
test.describe('Pruebas de navegación - del Home a catalogo', () => {
  test('Desde el navbar, al hacer click en el link "Catalogo" debe redirigir a la página catalogo.html', async ({ page }) => {
  
    await test.step('click en navbar botón catalogo', async () => {
    
      await page.goto('https://gustavoplaywright.github.io/playgroundweb/index.html');
      await expect(page.locator('h1')).toBeVisible();
      await page.getByRole('link', { name: 'Catálogo', exact: true }).click();
      await expect(page).toHaveURL(/.*catalog.html/);
      });

    await test.step('verificar que se cargó la página catalogo.html', async () => {
      await expect(page.locator('h1')).toBeVisible();
      await expect(page.locator('h1')).toHaveText('Un catálogo para probar');
      });

    });
  });

/*Navegación a catalog.html a traves del botón Explorar el playground*/
  test.describe('Pruebas de navegación - del Home a catalogo por el botón del cuerpo del index', () => {
  test('Desde botón Explorar el playground, al hacer click debe redirigir a la página catalogo.html', async ({ page }) => {
  
    await test.step('click en Explorar el playground', async () => {
    
      await page.goto('https://gustavoplaywright.github.io/playgroundweb/index.html');
      await expect(page.locator('h1')).toBeVisible();
      await page.getByRole('link', { name: 'Explorar el playground' }).click();
      await expect(page).toHaveURL(/.*catalog.html/);
      });

    await test.step('verificar que se cargó la página catalogo.html', async () => {
      await expect(page.locator('h1')).toBeVisible();
      await expect(page.locator('h1')).toHaveText('Un catálogo para probar');
      });

    });
  });


  /*Navegación a catalog.html a traves del catalogo y filtros de la card de abajo*/
  test.describe('Pruebas de navegación - del Home a catalogo por el botón catalogo y filtros', () => {
  test('Desde botón catalogo y filtros, al hacer click debe redirigir a la página catalogo.html', async ({ page }) => {
  
    await test.step('click en catalogo y filtros', async () => {
    
      await page.goto('https://gustavoplaywright.github.io/playgroundweb/index.html');
      await expect(page.locator('h1')).toBeVisible();
      await page.getByRole('link', { name: 'Catálogo y filtros Busca,' }).click();
      await expect(page).toHaveURL(/.*catalog.html/);
      });

    await test.step('verificar que se cargó la página catalogo.html', async () => {
      await expect(page.locator('h1')).toBeVisible();
      await expect(page.locator('h1')).toHaveText('Un catálogo para probar');
      });

    });
  });


  test.describe('Pruebas de navegación - del home a Form (Registro)', () => {
    test('Desde el navbar, al hacer click en el link "Registro" debe redirigir a la página form.html', async ({ page }) => {
      await test.step('click en navbar botón registro', async () => {
        await page.goto('https://gustavoplaywright.github.io/playgroundweb/index.html');
        await expect(page.locator('h1')).toBeVisible();
        await page.getByRole('link', { name: 'Registro', exact: true }).click();
        await expect(page).toHaveURL(/.*form.html/);
      });

      await test.step('verificar que se cargó la página form.html', async () => {
        await expect(page.locator('h1')).toBeVisible();
        await expect(page.locator('h1')).toHaveText('Registro');
      });
    });
  });

  test.describe('Pruebas de navegación - del home a Form (Contacto)', () => {
    test('Desde Practica cada interacción, al hacer click en el Formulario enviado debe redirigir a la página form.html', async ({ page }) => {
      await test.step('click en navbar botón contacto', async () => {
        await page.goto('https://gustavoplaywright.github.io/playgroundweb/index.html');
        /*Espera que se cargue la pagina y que el h1 sea visible*/
        await expect(page.locator('h1')).toBeVisible();
        /*Hace click en el link "Formulario validado"*/
        await page.getByRole('link', { name: 'Formulario validado' }).click();
                await expect(page).toHaveURL(/.*form.html/);
      });  
      
            await test.step('verificar que se cargó la página form.html', async () => {
        await expect(page.locator('h1')).toBeVisible();
        await expect(page.locator('h1')).toHaveText('Registro');
      });
    });
  });

  