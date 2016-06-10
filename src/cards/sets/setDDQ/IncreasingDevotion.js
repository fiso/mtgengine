"use strict";
const Constants = require ("../../../Constants");
const IncreasingDevotionBase = require("../setDKA/IncreasingDevotion");

class IncreasingDevotion extends IncreasingDevotionBase {
  constructor (game) {
    super(game, "Increasing Devotion", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = IncreasingDevotion;
