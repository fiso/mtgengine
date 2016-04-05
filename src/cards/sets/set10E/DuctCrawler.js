"use strict";
const Constants = require ("../../../Constants");
const DuctCrawlerBase = require("../setSTH/DuctCrawler");

class DuctCrawler extends DuctCrawlerBase {
  constructor(game) {
    super(game, "Duct Crawler", "Tenth Edition", "10E");
  }
}

module.exports = DuctCrawler;
