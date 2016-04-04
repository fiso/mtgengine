"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RampartCrawler extends Card {
  constructor(game) {
    super(game, "Rampart Crawler", "Mercadian Masques", "MMQ");
  }
}

module.exports = RampartCrawler;
