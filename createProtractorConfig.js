const SpecReporter = require("jasmine-spec-reporter").SpecReporter;

module.exports = (providedConfig) => {
    const defaultConfig = {
        baseUrl: 'http://infinite-savannah-93746.herokuapp.com',
        specs: ['./specs/*.spec.js'],
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

    return Object.assign(
        {},
        defaultConfig,
        providedConfig
    );
};