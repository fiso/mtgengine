"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RampartCrawler extends UnimplementedCard {
  constructor(game) {
    super(game, "Rampart Crawler", "Mercadian Masques", "MMQ");
  }
}

module.exports = RampartCrawler;
