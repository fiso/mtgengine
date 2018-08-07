"use strict";
const Constants = require ("../../../Constants");
const CrystallineCrawlerBase = require("../setCM2/CrystallineCrawler");

class CrystallineCrawler extends CrystallineCrawlerBase {
  constructor (game) {
    super(game, "Crystalline Crawler", "You Make the Cube", "PZ2");
  }
}

module.exports = CrystallineCrawler;
