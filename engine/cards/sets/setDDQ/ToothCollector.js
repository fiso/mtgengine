"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ToothCollector extends Card {
  constructor(game) {
    super(game, "Tooth Collector", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = ToothCollector;
