"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Spirit extends Card {
  constructor(game) {
    super(game, "Spirit", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = Spirit;
