"use strict";
const Constants = require ("../../../Constants");
const CobbledWingsBase = require("../setXLN/CobbledWings");

class CobbledWings extends CobbledWingsBase {
  constructor (game) {
    super(game, "Cobbled Wings", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = CobbledWings;
