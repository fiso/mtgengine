"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CausticCrawler extends UnimplementedCard {
  constructor (game) {
    super(game, "Caustic Crawler", "Worldwake", "WWK");
  }
}

module.exports = CausticCrawler;
