"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ToothCollector extends UnimplementedCard {
  constructor (game) {
    super(game, "Tooth Collector", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = ToothCollector;
