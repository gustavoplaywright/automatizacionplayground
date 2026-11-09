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

  /*Pruebas de navegación al dashboard.html*/ 
  /*Dashboard botón 1*/
  test.describe('Pruebas de navegación - del home a dashboard botón del navbar', () => {
    test('Desde el navbar, al hacer click en el link "Dashboard" debe redirigir a la página dashboard.html', async ({ page }) => {
      await test.step('click en navbar botón dashboard', async () => {
        await page.goto('https://gustavoplaywright.github.io/playgroundweb/index.html');
        await expect(page.locator('h1')).toBeVisible();
        await page.getByRole('link', { name: 'Dashboard', exact: true }).click();
        await expect(page).toHaveURL(/.*dashboard.html/);
      });

      await test.step('verificar que se cargó la página dashboard.html', async () => {
        await expect(page.locator('h1')).toBeVisible();
        await expect(page.locator('h1')).toHaveText('Dashboard');
      });

    });
  });
/*Dashboard botón 2*/
  test.describe ('Pruebas de navegación - del home a dashboard botón del cuerpo del index', () => {
    test('Desde el botón "Ir al dashboard", al hacer click debe redirigir a la página dashboard.html', async ({ page }) => {
      await test.step('click en el botón "Ir al dashboard"', async () => {
        await page.goto('https://gustavoplaywright.github.io/playgroundweb/index.html');
        await expect(page.locator('h1')).toBeVisible();
        await page.getByRole('link', { name: 'Ver dashboard' }).click();
        await expect(page).toHaveURL(/.*dashboard.html/);
      });

      await test.step('verificar que se cargó la página dashboard.html', async () => {
        await expect(page.locator('h1')).toBeVisible();
        await expect(page.locator('h1')).toHaveText('Dashboard');
      }); 
  });
});
/*Dashboard botón 3*/
  test.describe ('Pruebas de navegación - del home a dashboard botón del cuerpo del index en la card que se llama Dashboard dinámico', () => {
    test('Desde el botón "Dashboard dinámico", al hacer click debe redirigir a la página dashboard.html', async ({ page }) => {
      await test.step('click en el botón "Dashboard dinámico"', async () => {
        await page.goto('https://gustavoplaywright.github.io/playgroundweb/index.html');
        await expect(page.locator('h1')).toBeVisible();
        await page.getByRole('link', { name: 'Dashboard dinámico Filtra y' }).click();
        await expect(page).toHaveURL(/.*dashboard.html/);
      });

      await test.step('verificar que se cargó la página dashboard.html', async () => {
        await expect(page.locator('h1')).toBeVisible();
        await expect(page.locator('h1')).toHaveText('Dashboard');
      }); 
  });
});

/*Prueba de navegación al contacto.html*/
/*Contactos botón 1*/
  test.describe('Pruebas de navegación - del home a contacto botón del navbar', () => {
    test('Desde el navbar, al hacer click en el link "Contacto" debe redirigir a la página contacto.html', async ({ page }) => {
      await test.step('click en navbar botón contacto', async () => {
        await page.goto('https://gustavoplaywright.github.io/playgroundweb/index.html');
        await expect(page.locator('h1')).toBeVisible();
        await page.getByRole('link', { name: 'Contacto', exact: true }).click();
        await expect(page).toHaveURL(/.*contact.html/);
      });

      await test.step('verificar que se cargó la página contacto.html', async () => {
        await expect(page.locator('h1')).toBeVisible();
        await expect(page.locator('h1')).toHaveText('Hablemos de tu próximo proyecto');
      });
    });
  });

  /*Contactos botón 2*/
  test.describe ('Pruebas de navegación - del home a contacto botón del cuerpo del index', () => {
    test('Desde el botón "Ir al contacto", al hacer click debe redirigir a la página contacto.html', async ({ page }) => {
      await test.step('click en el botón "Ir al contacto"', async () => {
        await page.goto('https://gustavoplaywright.github.io/playgroundweb/index.html');
        await expect(page.locator('h1')).toBeVisible();
        await page.getByRole('link', { name: 'Flujos de contacto Campos' }).click();
        await expect(page).toHaveURL(/.*contact.html/);
      });
      await test.step('verificar que se cargó la página contacto.html', async () => {
        await expect(page.locator('h1')).toBeVisible();
        await expect(page.locator('h1')).toHaveText('Hablemos de tu próximo proyecto');
      });
    });
  });

  

  /*Validaciones adicionales para existencia de cards*/
  test.describe('Pruebas de existencia de cards en el home', () => {
    test('Validar que existan 6 cards en el home', async ({ page }) => {
      await page.goto('https://gustavoplaywright.github.io/playgroundweb/index.html');
      const cards = page.locator('.card');
      await expect(cards).toHaveCount(6);
    });
  });

  /*Validar la existencia del texto: Controles accesibles, estados observables y atributos de prueba pensados para tus selectores.*/
  test.describe('Pruebas de existencia de texto en el home', () => {
    test('Validar que exista el texto: Controles accesibles, estados observables y atributos de prueba pensados para tus selectores.', async ({ page }) => {  
      await page.goto('https://gustavoplaywright.github.io/playgroundweb/index.html');
      const texto = page.locator('p:has-text("Controles accesibles, estados observables y atributos de prueba pensados para tus selectores.")');
      await expect(texto).toBeVisible();
    });
  });
