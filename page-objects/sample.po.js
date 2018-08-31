const helper = require('protractor-helper');

class Page {
    constructor() {
        this.tableElements = element.all(by.css('.table .table-row'));
        this.moreButton = element(by.css('.interactions button[type="button"]'));
        this.loadingElement = element(by.className('loading'));
        this.searchInputTextField = element(by.css('.interactions input[type="text"]'));
        this.searchButton = element(by.css('.interactions button[type="submit"]'));
        this.dismissButtonOfFirstItem = element.all(by.css('.table-row .button-inline')).first();
    }

    searchForTermAfterClearingInputField(term) {
        helper.clearFieldWhenVisible(this.searchInputTextField);
        helper.fillFieldWithTextWhenVisible(this.searchInputTextField, term)
        helper.clickWhenClickable(this.searchButton);
    }
}

module.exports = Page;