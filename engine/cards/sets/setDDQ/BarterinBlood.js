"use strict";
const Constants = require ("../../../Constants");
const BarterinBloodBase = require("../setAVR/BarterinBlood");

class BarterinBlood extends BarterinBloodBase {
  constructor(game) {
    super(game, "Barter in Blood", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = BarterinBlood;
