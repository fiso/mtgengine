"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SharpenedPitchfork extends UnimplementedCard {
  constructor(game) {
    super(game, "Sharpened Pitchfork", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = SharpenedPitchfork;
