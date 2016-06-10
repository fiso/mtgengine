"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SludgeCrawler extends UnimplementedCard {
  constructor (game) {
    super(game, "Sludge Crawler", "Battle for Zendikar", "BFZ");
  }
}

module.exports = SludgeCrawler;
