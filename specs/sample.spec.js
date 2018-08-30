const EC = protractor.ExpectedConditions;
const DEFAULT_TIMEOUT_IN_MS = 5000;

describe('Hackernews kind off app', () => {
  // Test's pre-condition
  beforeEach(() => browser.get(''));

  // afterEach(() => browser.sleep(1000));

  it('renders 100 items in the first visit', () => {
    // Element definition
    const tableElements = element.all(by.css('.table .table-row'));

    // Wait for elements before assertion
    browser.wait(EC.visibilityOf(tableElements.first()), DEFAULT_TIMEOUT_IN_MS);
    browser.wait(EC.visibilityOf(tableElements.last()), DEFAULT_TIMEOUT_IN_MS);

    // Assertion
    expect(tableElements.count()).toBe(100);
  });

  it('quickly shows a loading component when clicking the More button', () => {
    // Elements definition
    const moreButton = element(by.css('.interactions button[type="button"]'));
    const loadingElement = element(by.className('loading'));

    // Wait for element before action
    browser.wait(EC.visibilityOf(moreButton), DEFAULT_TIMEOUT_IN_MS);

    // Action
    moreButton.click();

    // Wait for element as assertion
    browser.wait(EC.visibilityOf(loadingElement), DEFAULT_TIMEOUT_IN_MS);
  });

  it('renders 200 items after clicking the More button', () => {
    // Elements definition
    const moreButton = element(by.css('.interactions button[type="button"]'));
    const loadingElement = element(by.className('loading'));

    // Wait for element before action
    browser.wait(EC.visibilityOf(moreButton), DEFAULT_TIMEOUT_IN_MS);

    // Action
    moreButton.click();

    // Wait for element to change state before defining the element that will be used on assertion
    browser.wait(EC.visibilityOf(loadingElement), DEFAULT_TIMEOUT_IN_MS);
    browser.wait(EC.stalenessOf(loadingElement), DEFAULT_TIMEOUT_IN_MS);

    // Element definition
    const tableElements = element.all(by.css('.table .table-row'));

    // Wait for elements before assertion
    browser.wait(EC.visibilityOf(tableElements.first()), DEFAULT_TIMEOUT_IN_MS);
    browser.wait(EC.visibilityOf(tableElements.last()), DEFAULT_TIMEOUT_IN_MS);

    // Assertion
    expect(tableElements.count()).toBe(200);
  });

  it('quickly shows a loading component when searching for the word "react" for the first time', () => {
    // Elements definition
    const searchInputTextField = element(by.css('.interactions input[type="text"]'));
    const searchButton = element(by.css('.interactions button[type="submit"]'))
    const loadingElement = element(by.className('loading'));

    // Wait for elements before actions
    browser.wait(EC.visibilityOf(searchInputTextField), DEFAULT_TIMEOUT_IN_MS);
    browser.wait(EC.visibilityOf(searchButton), DEFAULT_TIMEOUT_IN_MS);

    // Actions
    searchInputTextField.clear();
    searchInputTextField.sendKeys('react');
    searchButton.click();

    // Wait for element as assertion
    browser.wait(EC.visibilityOf(loadingElement), DEFAULT_TIMEOUT_IN_MS);
  });

  it('renders 100 items after searching for the word "react" for the first time', () => {
    // Elements definition
    const searchInputTextField = element(by.css('.interactions input[type="text"]'));
    const searchButton = element(by.css('.interactions button[type="submit"]'))
    const loadingElement = element(by.className('loading'));

    // Wait for elements before actions
    browser.wait(EC.visibilityOf(searchInputTextField), DEFAULT_TIMEOUT_IN_MS);
    browser.wait(EC.visibilityOf(searchButton), DEFAULT_TIMEOUT_IN_MS);

    // Actions
    searchInputTextField.clear();
    searchInputTextField.sendKeys('react');
    searchButton.click();

    // Wait for element to change state before defining the element that will be used on assertion
    browser.wait(EC.visibilityOf(loadingElement), DEFAULT_TIMEOUT_IN_MS);
    browser.wait(EC.stalenessOf(loadingElement), DEFAULT_TIMEOUT_IN_MS);

    // Element definition
    const tableElements = element.all(by.css('.table .table-row'));

    // Assertion
    expect(tableElements.count()).toBe(100)
  });

  it('does not renders a loading component after searching for "react" and then "redux" again', () => {
    // Elements definition
    const searchInputTextField = element(by.css('.interactions input[type="text"]'));
    const searchButton = element(by.css('.interactions button[type="submit"]'))
    const loadingElement = element(by.className('loading'));

    // Wait for elements before actions
    browser.wait(EC.visibilityOf(searchInputTextField), DEFAULT_TIMEOUT_IN_MS);
    browser.wait(EC.visibilityOf(searchButton), DEFAULT_TIMEOUT_IN_MS);

    // Actions
    searchInputTextField.clear();
    searchInputTextField.sendKeys('react');
    searchButton.click();

    // Wait for element to change state before interacting with other elements.
    browser.wait(EC.visibilityOf(loadingElement), DEFAULT_TIMEOUT_IN_MS);
    browser.wait(EC.stalenessOf(loadingElement), DEFAULT_TIMEOUT_IN_MS);

    searchInputTextField.clear();
    searchInputTextField.sendKeys('redux');
    searchButton.click();

    // Wait for element as assertion
    browser.wait(EC.stalenessOf(loadingElement), DEFAULT_TIMEOUT_IN_MS);
  });

  it('shows only 99 items after dismissing one item', () => {
    // Element definition
    const dismissButtonOfFirstItem = element.all(by.css('.table-row .button-inline')).first();

    // Wait for element before action
    browser.wait(EC.visibilityOf(dismissButtonOfFirstItem), DEFAULT_TIMEOUT_IN_MS);

    // Action
    dismissButtonOfFirstItem.click();

    // Element definition
    const tableElements = element.all(by.css('.table .table-row'));

    // Assertion
    expect(tableElements.count()).toBe(99);
  });
});
