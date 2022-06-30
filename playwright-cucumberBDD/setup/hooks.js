const playwright = require('playwright')
const { Before, After, BeforeAll, AfterAll} = require('@cucumber/cucumber')

BeforeAll(async () => {
  console.log('Launch Browser')
  global.browser = await playwright['chromium'].launch(
{
          args: ['--start-maximized', '--disable-web-security', '--disable-features=IsolateOrigins, site-per-process'],
          headless: false,
          slowMo: 200
        })
})

AfterAll(async () => {
  console.log('Close Browser')
  await global.browser.close()
})

Before(async (scenario) => {
  console.log(`Starting Cucumber Scenario ${scenario.pickle.name}`);
  global.context = await global.browser.newContext({
        viewport: null,
        recordVideo: {
            dir: './reports/videos/'+ scenario.pickle.name,
        }
    });
    global.page = await global.context.newPage();
})

After(async (scenario) => {
    console.log(`Completed Cucumber Scenario ${scenario.pickle.name}`);

  const scenarioStatus = scenario.result?.status;
  if(scenarioStatus?.toUpperCase() === 'FAILED') {
          const screenshot = await global.page.screenshot({
          path: `./reports/screenshots/${scenario.pickle.name}.png`
      })
  }
  await global.page.close()
  await global.context.close()
})
