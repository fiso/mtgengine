"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MomentaryBlink extends UnimplementedCard {
  constructor (game) {
    super(game, "Momentary Blink", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = MomentaryBlink;
