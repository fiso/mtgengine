"use strict";
const Constants = require ("../../../Constants");
const MomentaryBlinkBase = require("../setMM3/MomentaryBlink");

class MomentaryBlink extends MomentaryBlinkBase {
  constructor (game) {
    super(game, "Momentary Blink", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = MomentaryBlink;
