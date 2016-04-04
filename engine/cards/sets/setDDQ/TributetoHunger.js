"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TributetoHunger extends Card {
  constructor(game) {
    super(game, "Tribute to Hunger", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = TributetoHunger;
