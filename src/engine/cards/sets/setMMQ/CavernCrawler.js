"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CavernCrawler extends UnimplementedCard {
  constructor (game) {
    super(game, "Cavern Crawler", "Mercadian Masques", "MMQ");
  }
}

module.exports = CavernCrawler;
