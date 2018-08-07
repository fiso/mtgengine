"use strict";
const Constants = require ("../../../Constants");
const BarterinBloodBase = require("../setCMA/BarterinBlood");

class BarterinBlood extends BarterinBloodBase {
  constructor (game) {
    super(game, "Barter in Blood", "Duel Decks: Mirrodin Pure vs. New Phyrexia", "TD2");
  }
}

module.exports = BarterinBlood;
