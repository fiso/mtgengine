"use strict";
const Constants = require ("../../../Constants");
const AppetiteforBrainsBase = require("../setAVR/AppetiteforBrains");

class AppetiteforBrains extends AppetiteforBrainsBase {
  constructor(game) {
    super(game, "Appetite for Brains", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = AppetiteforBrains;
