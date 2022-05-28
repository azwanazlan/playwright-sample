const { test, expect } = require('@playwright/test');

test.describe('Login',()=>{ 
test('Login with right credential', async ({ page }) => {
  
  https://opensource-demo.orangehrmlive.com/index.php/auth/logout
  //await page.goto('https://opensource-demo.orangehrmlive.com/index.php/auth/logout');
  
  // Go to https://opensource-demo.orangehrmlive.com/
  await page.goto('https://opensource-demo.orangehrmlive.com/');

  // Click input[name="txtUsername"]
  await page.locator('input[name="txtUsername"]').click();

  // Fill input[name="txtUsername"]
  await page.locator('input[name="txtUsername"]').fill('Admin');

  // Click input[name="txtPassword"]
  await page.locator('input[name="txtPassword"]').click();

  // Fill input[name="txtPassword"]
  await page.locator('input[name="txtPassword"]').fill('admin123');

  // Click input:has-text("LOGIN")
  await page.locator('input:has-text("LOGIN")').click();
  // assert.equal(page.url(), 'https://opensource-demo.orangehrmlive.com/index.php/dashboard');

  // Click text=Welcome Paul
  await expect(page.locator('.head')).toHaveText('Dashboard');

  await page.locator('text=Welcome Paul').click();
    // Click text=Logout
  await page.locator('text=Logout').click();
  
  await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/index.php/auth/login');
  
    });
});