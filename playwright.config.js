const { devices } = require('@playwright/test');
const loginState = require('./loginState');

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: 'html',
  use: {
    trace: 'on-first-retry',
    launchOptions: {
      slowMo: 100,
      headless: false,
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