const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require ("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require ("@badeball/cypress-cucumber-preprocessor/esbuild");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    })
  );

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
    specPattern: "cypress/e2e/features/*.feature",
    baseUrl: "https://www.demoblaze.com/",
    chromeWebSecurity: false,
    env: {
    },
  },
});
/*
module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/features/*.feature",
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config)
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)]
        })
      )
      return config
    },
    specPattern:"cypress/e2e/feature/*.feature",
    baseUrl:"https://www.demoblaze.com/",
    chromeWebSecurity: false,
  },  
});*/