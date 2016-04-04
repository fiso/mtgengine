"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ElvishScrapperBase = require("../set8ED/ElvishScrapper.js");

class ElvishScrapper extends ElvishScrapperBase {
  constructor(game) {
    super(game, "Elvish Scrapper", "Onslaught", "ONS");
  }
}

module.exports = ElvishScrapper;
