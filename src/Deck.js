"use strict";
const fs = require("fs");
const http = require("http");
const Utils = require("./Utils");
const assert = require("assert");
const url = require("url");

function DeckboxScraper (html) {
  let scraped = html;
  scraped = html.slice(html.toLowerCase().indexOf("<body>"));
  scraped = Utils.replaceAll(scraped, "<br/>", "\n");
  scraped = Utils.replaceAll(scraped, "<br />", "\n");
  scraped = Utils.replaceAll(scraped, "<br>", "\n");
  scraped = Utils.stripTags(scraped);
  return scraped;
}

class DeckLoader {
  constructor () {
    if (new.target === DeckLoader) {
      throw new TypeError("DeckLoader is not to be used directly");
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
    let rows = fileContents.split("\n");
    let target = this._mainDeck;
    for (let row of rows) {
      let count = 1;
      let item = row.trim();
      if (Utils.isNumeric(item.split(" ")[0])) {
        count = parseInt(item.split(" ")[0]);
        item = item.split(" ").slice(1).join(" ");
      } else if (item.toUpperCase().indexOf("SIDEBOARD") === 0) {
        target = this._sideboard;
        continue;
      }

      item = item.replace("\r", "")

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
    this.parseFile(fs.readFileSync(filename, "utf8"));
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

    let urlInfo = url.parse(urlString);

    http.request({
      host: urlInfo.host,
      path: urlInfo.pathname
    }, response => {
      let data = "";
      response.on("data", chunk => {
        data += chunk;
      });
      response.on("end", () => {
        let html = data.toString();
        if (scraper) {
          html = scraper(html);
        }
        this.parseFile(html);
      })
    }).end();
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
  Deck, DeckLoader, FSLoader, HTTPLoader, StringLoader, DeckboxScraper
};
