"use strict";
const Constants = require ("../../../Constants");
const SejiriRefugeBase = require("../setC18/SejiriRefuge");

class SejiriRefuge extends SejiriRefugeBase {
  constructor (game) {
    super(game, "Sejiri Refuge", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = SejiriRefuge;
