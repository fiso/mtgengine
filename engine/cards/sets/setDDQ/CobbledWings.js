"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CobbledWings extends Card {
  constructor(game) {
    super(game, "Cobbled Wings", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = CobbledWings;
