"use strict";
const Constants = require ("../../../Constants");
const CrystallineCrawlerBase = require("../setCM2/CrystallineCrawler");

class CrystallineCrawler extends CrystallineCrawlerBase {
  constructor (game) {
    super(game, "Crystalline Crawler", "Commander 2016", "C16");
  }
}

module.exports = CrystallineCrawler;
