// const { devices } = require('@playwright/test')

// // Playwright config to run tests on LambdaTest platform and local
// const config = {
//   testDir: 'tests',
//   testMatch: '**/*.spec.js',
//   timeout: 60000,
//   use: {
//     viewport: null
//   },
//   projects: [
//     // -- LambdaTest Config --
//     // name in the format: browserName:browserVersion:platform@lambdatest
//     // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
//     // Use additional configuration options provided by Playwright if required: https://playwright.dev/docs/api/class-testconfig
//     {
//       name: 'chrome:latest:MacOS Catalina@lambdatest',
//       use: {
//         viewport: { width: 1920, height: 1080 }
//       }
//     },
//     {
//       name: 'chrome:latest:Windows 10@lambdatest',
//       use: {
//         viewport: { width: 1280, height: 720 }
//       }
//     },
//     {
//       name: 'MicrosoftEdge:90:Windows 10@lambdatest',
//       use: {
//         ...devices['iPhone 12 Pro Max']
//       }
//     },
//     {
//       name: 'pw-firefox:latest:Windows 10@lambdatest',
//       use: {
//         viewport: { width: 1280, height: 720 }
//       }
//     },
//     {
//       name: 'pw-webkit:latest:Windows 10@lambdatest',
//       use: {
//         viewport: { width: 1920, height: 1080 }
//       }
//     }

    // Config for running tests in local
    // {
    //   name: "chrome",
    //   use: {
    //     browserName: "chromium",
    //     channel: "chrome",
    //   },
    // },
    // {
    //   name: "safari",
    //   use: {
    //     browserName: "webkit",
    //     viewport: { width: 1200, height: 750 },
    //   },
    // },
    // {
    //   name: "firefox",
    //   use: {
    //     browserName: "firefox",
    //     viewport: { width: 800, height: 600 },
    //   },
    // },
    // // Test in mobile viewport.
    // {
    //   name: "chrome@pixel5",
    //   use: {
    //     ...devices['iPhone 12 Pro Max'],
    //   }
    // },
//   ]
// }

// module.exports = config




// /* configuration on local without LambdaTest start here
const { devices } = require('@playwright/test');


//@type {import('@playwright/test').PlaywrightTestConfig} 
const config = {
  testDir: 'tests',
  testMatch: '**/*.spec.js',
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter:[ ['html', { outputFolder: 'my-report' }] ],
  use: {
    trace: 'on',
    launchOptions: {
      slowMo: 100,
      headless: false,
      }
  },
  globalSetup: require.resolve('./loginState'), //for save login
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ],
};

module.exports = config;
// */