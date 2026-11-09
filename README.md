echo "# 🧪 Automatización Playground Web

Framework de pruebas de extremo a extremo (E2E) desarrollado con **Playwright** y **TypeScript**, diseñado para validar de forma automatizada las funcionalidades, flujos de navegación, formularios y componentes interactivos del proyecto [playgroundweb](https://github.com/gustavoplaywright/playgroundweb).

---

## 🛠️ Tecnologías y Herramientas

* **TypeScript** como lenguaje de programación principal.
* **Playwright Test** como motor de automatización E2E.
* **GitHub Actions** para integración continua (CI/CD).
* **Page Object Model (POM)** para la estructuración y mantenimiento de los selectores.

---

## ⚙️ Requisitos Previos

Antes de ejecutar las pruebas localmente, asegúrate de tener instalado en tu equipo:
* [Node.js](https://nodejs.org/) (versión 18 o superior recomendada).
* Git.

---

## 📥 Instalación

1. Clona este repositorio en tu máquina local:
   \`\`\`bash
   git clone https://github.com/gustavoplaywright/automatizacionplayground.git
   \`\`\`

2. Entra al directorio del proyecto:
   \`\`\`bash
   cd automatizacionplayground
   \`\`\`

3. Instala las dependencias del proyecto:
   \`\`\`bash
   npm ci
   \`\`\`

4. Instala los navegadores necesarios de Playwright (junto con sus dependencias del sistema):
   \`\`\`bash
   npx playwright install --with-deps
   \`\`\`

---

## 🚀 Ejecución de Pruebas

Puedes ejecutar las pruebas de diferentes maneras según tus necesidades:

* **Ejecutar todas las pruebas en modo headless (consola):**
  \`\`\`bash
  npx playwright test
  \`\`\`

* **Ejecutar las pruebas en modo interactivo con interfaz gráfica (Playwright UI):**
  \`\`\`bash
  npx playwright test --ui
  \`\`\`

* **Ejecutar las pruebas viendo el navegador en tiempo real (Headed):**
  \`\`\`bash
  npx playwright test --headed
  \`\`\`

* **Ejecutar un archivo de pruebas específico:**
  \`\`\`bash
  npx playwright test tests/navegacionIndex.spec.ts
  \`\`\`

---

## 📊 Reportes de Pruebas

Una vez finalizada la ejecución, puedes visualizar el reporte HTML detallado con capturas y trazas de los errores ejecutando:
\`\`\`bash
npx playwright show-report
\`\`\`

---

## 🤖 Integración Continua (CI/CD)

Este repositorio cuenta con flujos de trabajo configurados en **GitHub Actions** (\`.github/workflows/playwright.yml\`) que ejecutan automáticamente la suite completa de pruebas:
1. De forma directa ante cada \`git push\` a la rama \`main\`.
2. De forma remota y sincronizada cuando se actualiza el código fuente en el repositorio de la página web (\`playgroundweb\`).
" > README.md