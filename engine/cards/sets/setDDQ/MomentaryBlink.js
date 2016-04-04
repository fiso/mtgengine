"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MomentaryBlink extends Card {
  constructor(game) {
    super(game, "Momentary Blink", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = MomentaryBlink;
