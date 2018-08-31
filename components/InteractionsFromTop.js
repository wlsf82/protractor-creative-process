const helper = require('protractor-helper');

class InteractionsFromTop {
    constructor() {
        this.searchInputTextField = element(by.css('.interactions input[type="text"]'));
        this.searchButton = element(by.css('.interactions button[type="submit"]'));
    }

    searchForTermAfterClearingInputField(term) {
        helper.clearFieldWhenVisible(this.searchInputTextField);
        helper.fillFieldWithTextWhenVisible(this.searchInputTextField, term);
        helper.clickWhenClickable(this.searchButton);
    }
}

module.exports = InteractionsFromTop;