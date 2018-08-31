const helper = require('protractor-helper');

const InteractionsFromBottom = require('../components/InteractionsFromBottom.js');
const InteractionsFromTop = require('../components/InteractionsFromTop.js');
const Loading = require('../components/Loading.js');
const Table = require('../components/Table.js');

class Page {
    constructor() {
        this.relativeUrl = '';

        this.interactionsFromBottom = new InteractionsFromBottom();
        this.interactionsFromTop = new InteractionsFromTop();
        this.loading = new Loading();
        this.table = new Table();

        // this.tableElements = element.all(by.css('.table .table-row'));
        // this.moreButton = element(by.css('.interactions button[type="button"]'));
        // this.loadingElement = element(by.className('loading'));
        // this.searchInputTextField = element(by.css('.interactions input[type="text"]'));
        // this.searchButton = element(by.css('.interactions button[type="submit"]'));
        // this.dismissButtonOfFirstItem = element.all(by.css('.table-row .button-inline')).first();
    }

    // searchForTermAfterClearingInputField(term) {
    //     helper.clearFieldWhenVisible(this.searchInputTextField);
    //     helper.fillFieldWithTextWhenVisible(this.searchInputTextField, term)
    //     helper.clickWhenClickable(this.searchButton);
    // }
}

module.exports = Page;