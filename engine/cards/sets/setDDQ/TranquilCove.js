"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TranquilCove extends Card {
  constructor(game) {
    super(game, "Tranquil Cove", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = TranquilCove;
