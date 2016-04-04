"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SharpenedPitchfork extends Card {
  constructor(game) {
    super(game, "Sharpened Pitchfork", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = SharpenedPitchfork;
