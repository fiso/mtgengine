"use strict";
const Constants = require ("../../../Constants");
const AkoumRefugeBase = require("../setC13/AkoumRefuge");

class AkoumRefuge extends AkoumRefugeBase {
  constructor(game) {
    super(game, "Akoum Refuge", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = AkoumRefuge;
