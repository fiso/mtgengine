"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AppetiteforBrainsBase = require("../setAVR/AppetiteforBrains.js");

class AppetiteforBrains extends AppetiteforBrainsBase {
  constructor(game) {
    super(game, "Appetite for Brains", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = AppetiteforBrains;
