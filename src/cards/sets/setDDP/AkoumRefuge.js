"use strict";
const Constants = require ("../../../Constants");
const AkoumRefugeBase = require("../setC18/AkoumRefuge");

class AkoumRefuge extends AkoumRefugeBase {
  constructor (game) {
    super(game, "Akoum Refuge", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = AkoumRefuge;
