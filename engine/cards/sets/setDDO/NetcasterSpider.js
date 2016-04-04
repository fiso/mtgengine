"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NetcasterSpider extends Card {
  constructor(game) {
    super(game, "Netcaster Spider", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = NetcasterSpider;
