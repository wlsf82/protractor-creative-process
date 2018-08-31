describe('Hackernews kind off app', () => {
  // Test's pre-condition
  beforeEach(() => browser.get(''));

  // afterEach(() => browser.sleep(1000));

  it('renders 100 items in the first visit', () => {
    // Element definition
    const tableElements = element.all(by.css('.table .table-row'));

    // Assertion
    expect(tableElements.count()).toBe(100);
  });

  it('quickly shows a loading component when clicking the More button', () => {
    // Elements definition
    const moreButton = element(by.css('.interactions button[type="button"]'));
    const loadingElement = element(by.className('loading'));

    // Action
    moreButton.click();

    // Assertion
    expect(loadingElement.isDisplayed()).toBe(true);
  });

  it('renders 200 items after clicking the More button', () => {
    // Element definition
    const moreButton = element(by.css('.interactions button[type="button"]'));

    // Action
    moreButton.click();

    // Element definition
    const tableElements = element.all(by.css('.table .table-row'));

    // Assertion
    expect(tableElements.count()).toBe(200);
  });

  it('quickly shows a loading component when searching for the word "react" for the first time', () => {
    // Elements definition
    const searchInputTextField = element(by.css('.interactions input[type="text"]'));
    const searchButton = element(by.css('.interactions button[type="submit"]'))
    const loadingElement = element(by.className('loading'));

    // Actions
    searchInputTextField.clear();
    searchInputTextField.sendKeys('react');
    searchButton.click();

    // Assertion
    expect(loadingElement.isDisplayed()).toBe(true);
  });

  it('renders 100 items after searching for the word "react" for the first time', () => {
    // Elements definition
    const searchInputTextField = element(by.css('.interactions input[type="text"]'));
    const searchButton = element(by.css('.interactions button[type="submit"]'))

    // Actions
    searchInputTextField.clear();
    searchInputTextField.sendKeys('react');
    searchButton.click();

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
    searchInputTextField.clear();
    searchInputTextField.sendKeys('react');
    searchButton.click();
    searchInputTextField.clear();
    searchInputTextField.sendKeys('redux');
    searchButton.click();

    // Assertion
    expect(loadingElement.isPresent()).not.toBe(true);
  });

  it('shows only 99 items after dismissing one item', () => {
    // Element definition
    const dismissButtonOfFirstItem = element.all(by.css('.table-row .button-inline')).first();

    // Action
    dismissButtonOfFirstItem.click();

    // Element definition
    const tableElements = element.all(by.css('.table .table-row'));

    // Assertion
    expect(tableElements.count()).toBe(99);
  });
});
