const helper = require('protractor-helper');

describe('Hackernews kind off app', () => {
  // Test's pre-condition
  beforeEach(() => browser.get(''));

  // afterEach(() => browser.sleep(1000));

  it('renders 100 items in the first visit', () => {
    // Element definition
    const tableElements = element.all(by.css('.table .table-row'));

    // Wait for elements before assertion
    helper.waitForElementVisibility(tableElements.first());
    helper.waitForElementVisibility(tableElements.last());

    // Assertion
    expect(tableElements.count()).toBe(100);
  });

  it('quickly shows a loading component when clicking the More button', () => {
    // Elements definition
    const moreButton = element(by.css('.interactions button[type="button"]'));
    const loadingElement = element(by.className('loading'));

    // Clicks in the element when it is clickable
    helper.clickWhenClickable(moreButton);

    // Wait for element as assertion
    helper.waitForElementVisibility(loadingElement);
  });

  it('renders 200 items after clicking the More button', () => {
    // Elements definition
    const moreButton = element(by.css('.interactions button[type="button"]'));
    const loadingElement = element(by.className('loading'));

    // Clicks in the element when it is clickable
    helper.clickWhenClickable(moreButton);

    // Wait for element to change state before defining the element that will be used on assertion
    helper.waitForElementVisibility(loadingElement);
    helper.waitForElementNotToBePresent(loadingElement);

    // Element definition
    const tableElements = element.all(by.css('.table .table-row'));

    // Wait for elements before assertion
    helper.waitForElementVisibility(tableElements.first());
    helper.waitForElementVisibility(tableElements.last());

    // Assertion
    expect(tableElements.count()).toBe(200);
  });

  it('quickly shows a loading component when searching for the word "react" for the first time', () => {
    // Elements definition
    const searchInputTextField = element(by.css('.interactions input[type="text"]'));
    const searchButton = element(by.css('.interactions button[type="submit"]'))
    const loadingElement = element(by.className('loading'));

    // Actions
    helper.clearFieldWhenVisible(searchInputTextField);
    helper.fillFieldWithTextWhenVisible(searchInputTextField, 'react');
    helper.clickWhenClickable(searchButton);

    // Wait for element as assertion
    helper.waitForElementVisibility(loadingElement);
  });

  it('renders 100 items after searching for the word "react" for the first time', () => {
    // Elements definition
    const searchInputTextField = element(by.css('.interactions input[type="text"]'));
    const searchButton = element(by.css('.interactions button[type="submit"]'))
    const loadingElement = element(by.className('loading'));

    // Actions
    helper.clearFieldWhenVisible(searchInputTextField);
    helper.fillFieldWithTextWhenVisible(searchInputTextField, 'react');
    helper.clickWhenClickable(searchButton);

    // Wait for element to change state before defining the element that will be used on assertion
    helper.waitForElementVisibility(loadingElement);
    helper.waitForElementNotToBePresent(loadingElement);

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

    // Actions
    helper.clearFieldWhenVisible(searchInputTextField);
    helper.fillFieldWithTextWhenVisible(searchInputTextField, 'react');
    helper.clickWhenClickable(searchButton);

    // Wait for element to change state before interacting with other elements.
    helper.waitForElementVisibility(loadingElement);
    helper.waitForElementNotToBePresent(loadingElement);

    helper.clearFieldWhenVisible(searchInputTextField);
    helper.fillFieldWithTextWhenVisible(searchInputTextField, 'redux');
    helper.clickWhenClickable(searchButton);

    // Wait for element as assertion
    helper.waitForElementNotToBePresent(loadingElement);
  });

  it('shows only 99 items after dismissing one item', () => {
    // Element definition
    const dismissButtonOfFirstItem = element.all(by.css('.table-row .button-inline')).first();

    // Action
    helper.clickWhenClickable(dismissButtonOfFirstItem)

    // Element definition
    const tableElements = element.all(by.css('.table .table-row'));

    // Assertion
    expect(tableElements.count()).toBe(99);
  });
});
