"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Rebuke extends Card {
  constructor(game) {
    super(game, "Rebuke", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = Rebuke;
