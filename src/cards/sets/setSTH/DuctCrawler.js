"use strict";
const Constants = require ("../../../Constants");
const DuctCrawlerBase = require("../set10E/DuctCrawler");

class DuctCrawler extends DuctCrawlerBase {
  constructor (game) {
    super(game, "Duct Crawler", "Stronghold", "STH");
  }
}

module.exports = DuctCrawler;
