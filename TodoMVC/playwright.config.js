const { devices } = require('@playwright/test');
// const loginState = require('../loginState');

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  testDir: './tests',
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter:[ ['html', { outputFolder: 'my-report' }] ],
  use: {
    trace: 'on',
    launchOptions: {
      slowMo: 100,
      headless: true,
      }
  },
  //globalSetup: require.resolve('./loginState'),
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
};

module.exports = config;