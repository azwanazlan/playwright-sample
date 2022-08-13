const { chromium } = require('@playwright/test');

module.exports = async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('https://opensource-demo.orangehrmlive.com/');
    await page.locator('input[name="txtUsername"]').fill('Admin');
    await page.locator('input[name="txtPassword"]').fill('admin123');
    await page.locator('input[id=btnLogin]').click();
    await page.context().storageState({ path: 'storageState.json' });
    await browser.close();
  };
   