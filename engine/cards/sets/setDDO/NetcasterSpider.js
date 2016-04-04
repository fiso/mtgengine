"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NetcasterSpider extends UnimplementedCard {
  constructor(game) {
    super(game, "Netcaster Spider", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = NetcasterSpider;
