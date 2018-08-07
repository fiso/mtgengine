'use strict';
const fetch = require('cross-fetch');
const fs = require('fs');
const Utils = require('./Utils');
const assert = require('assert');

function DeckboxScraper (html) {
  let scraped = html;
  scraped = html.slice(html.toLowerCase().indexOf('<body>'));
  scraped = Utils.replaceAll(scraped, '<br/>', '\n');
  scraped = Utils.replaceAll(scraped, '<br />', '\n');
  scraped = Utils.replaceAll(scraped, '<br>', '\n');
  scraped = Utils.stripTags(scraped);
  return scraped;
}

class DeckLoader {
  constructor () {
    if (new.target === DeckLoader) {
      throw new TypeError('DeckLoader is not to be used directly');
    }

    this._mainDeck = [];
    this._sideboard = [];
    this._resolve = null;
    this._reject = null;
    this._promise = new Promise((resolve, reject) => {
      this._resolve = resolve;
      this._reject = reject;
    });
  }

  parseFile (fileContents) {
    const rows = fileContents.split('\n');
    let target = this._mainDeck;
    for (const row of rows) {
      let count = 1;
      let item = row.trim();
      if (Utils.isNumeric(item.split(' ')[0])) {
        count = parseInt(item.split(' ')[0], 10);
        item = item.split(' ').slice(1).join(' ');
      } else if (item.toUpperCase().indexOf('SIDEBOARD') === 0) {
        target = this._sideboard;
        continue;
      }

      item = item.replace('\r', '');

      if (item.length < 1) {
        continue;
      }

      for (let n = 0; n < count; n++) {
        target.push(item);
      }
    }

    this._resolve();
  }

  ready () {
    return this._promise;
  }

  get mainDeck () {
    return this._mainDeck;
  }

  get sideboard () {
    return this._sideboard;
  }
}

class FSLoader extends DeckLoader {
  constructor (filename) {
    super();
    this.parseFile(fs.readFileSync(filename, 'utf8'));
  }
}

class StringLoader extends DeckLoader {
  constructor (decklistString) {
    super();
    this.parseFile(decklistString);
  }
}

class HTTPLoader extends DeckLoader {
  constructor (urlString, scraper) {
    super();

    fetch(urlString)
    .then((response) => {
      response.text().then((html) => {
        if (scraper) {
          html = scraper(html);
        }
        this.parseFile(html);
      });
    });
  }
}

class Deck {
  constructor (deckLoader) {
    assert(deckLoader);

    this._promise = new Promise((resolve, reject) => {
      deckLoader.ready().then(() => {
        this._mainDeck = deckLoader._mainDeck;
        this._sideboard = deckLoader._sideboard;
        resolve();
      });
    });
  }

  ready () {
    return this._promise;
  }
}

module.exports = {
  Deck, DeckLoader, FSLoader, HTTPLoader, StringLoader, DeckboxScraper,
};
