"use strict";
const fs = require("fs");
const http = require("http");
const Utils = require("./Utils");
const assert = require("assert");

class DeckLoader {
  constructor () {
    if (new.target === DeckLoader) {
      throw new TypeError("DeckLoader is not to be used directly");
    }

    this._mainDeck = [];
    this._sideboard = [];
    this._loadedCallbacks = [];
    this._loaded = false;
    this._callbacksRan = false;
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
    this._loaded = true;
    this.invokeLoadedCallbacksIfLoaded();
  }

  onLoaded (callback) {
    this._loadedCallbacks.push(callback);
    this.invokeLoadedCallbacksIfLoaded();
  }

  invokeLoadedCallbacksIfLoaded () {
    if (!this._loaded) {
      return;
    }

    assert(!this._callbacksRan);

    for (let callback of this._loadedCallbacks) {
      callback(this);
    }
    this._callbacksRan = true;
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

function DeckboxScraper (html) {
  let scraped = html;
  scraped = html.slice(html.toLowerCase().indexOf("<body>"));
  scraped = Utils.replaceAll(scraped, "<br/>", "\n");
  scraped = Utils.replaceAll(scraped, "<br />", "\n");
  scraped = Utils.replaceAll(scraped, "<br>", "\n");
  scraped = Utils.stripTags(scraped);
  return scraped;
}

class HTTPLoader extends DeckLoader {
  constructor (url, callback, scraper) {
    super();

    http.request({
      host: "deckbox.org",
      path: "/sets/1294166/export"
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
        if (callback) {
          callback();
        }
      })
    }).end();
  }
}

class Deck {
  constructor (deckLoader) {
    assert(deckLoader);
    assert(deckLoader._loaded);

    this._mainDeck = deckLoader._mainDeck;
    this._sideboard = deckLoader._sideboard;
  }
}

module.exports = {
  Deck, DeckLoader, FSLoader, HTTPLoader, DeckboxScraper
};
