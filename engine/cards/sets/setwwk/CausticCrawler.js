"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CausticCrawler extends Card {
  constructor(game) {
    super(game, "Caustic Crawler", "Worldwake", "WWK");
  }
}

module.exports = CausticCrawler;
