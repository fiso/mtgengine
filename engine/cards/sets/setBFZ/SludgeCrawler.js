"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SludgeCrawler extends Card {
  constructor(game) {
    super(game, "Sludge Crawler", "Battle for Zendikar", "BFZ");
  }
}

module.exports = SludgeCrawler;
