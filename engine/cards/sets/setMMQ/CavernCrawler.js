"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CavernCrawler extends Card {
  constructor(game) {
    super(game, "Cavern Crawler", "Mercadian Masques", "MMQ");
  }
}

module.exports = CavernCrawler;
