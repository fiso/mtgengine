"use strict";
const Constants = require ("../../../Constants");
const ElvishScrapperBase = require("../set8ED/ElvishScrapper");

class ElvishScrapper extends ElvishScrapperBase {
  constructor (game) {
    super(game, "Elvish Scrapper", "Onslaught", "ONS");
  }
}

module.exports = ElvishScrapper;
