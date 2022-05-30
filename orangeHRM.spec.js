const { test, expect } = require('@playwright/test');
//

//Login function
async function login( username , password) {

  this.username = username;
  this.password = password;

  await page.goto('https://opensource-demo.orangehrmlive.com/');
  await page.locator('input[name="txtUsername"]').click();
  await page.locator('input[name="txtUsername"]').fill(this.username);
  await page.locator('input[name="txtPassword"]').click();
  await page.locator('input[name="txtPassword"]').fill(this.password);
  await page.locator('input[id=btnLogin]').click();

}

test.describe('Login',()=>{ 
test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
  });

  test('(+) Successfully Login with right credentials', async ({})=> {
    await login("Admin","admin123");
    await expect(page.locator('.head')).toHaveText('Dashboard');
    
    });

  test('(-) Login with invalid username', async ({})=> {
    await login("Admina","admin123");
    await expect(page.locator('text=Invalid credentials')).toBeVisible;

    });

  test('(-) Login with invalid password', async ({})=> {
    await login("Admina","admin123");
    await expect(page.locator('text=Invalid credentials')).toBeVisible;
    
      
      });

});

test.describe('Search Users',() => {
test.use({ storageState: 'storageState.json'}); //for reuse sign in state (Take note kawan2)
  
  test('(+) Users enter valid username', async ({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/index.php/dashboard');
    await page.locator('b:has-text("Admin")').hover();
    await page.locator('text=User Management').hover();
    await page.locator('text=Users').click();
    await page.locator('input[name="searchSystemUser\\[userName\\]"]').fill('john.smith');
    await page.locator('text=Search').click();
    await expect(page.locator('text=John.Smith')).toBeVisible;
  
  });

});


