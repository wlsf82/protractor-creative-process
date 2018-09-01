const SpecReporter = require("jasmine-spec-reporter").SpecReporter;

module.exports.config = {
  baseUrl: 'http://infinite-savannah-93746.herokuapp.com',
  specs: ['./specs/*.spec.js'],
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: [
        "--headless",
        "--disable-gpu",
        "--window-size=1024,768",
      ],
    },
  },
  onPrepare: () => {
    browser.ignoreSynchronization = true;
    jasmine.getEnv().addReporter(new SpecReporter({
      displayFailuresSummary: true,
      displayFailedSpec: true,
      displaySuiteNumber: true,
      displaySpecDuration: true,
    }));
  },
  jasmineNodeOpts: {
    onComplete: null,
    isVerbose: false,
    showColors: true,
    includeStackTrace: true,
  },
  // highlightDelay: 1000,
};
