"use strict";
const Constants = require ("../../../Constants");
const KazanduRefugeBase = require("../setARC/KazanduRefuge");

class KazanduRefuge extends KazanduRefugeBase {
  constructor (game) {
    super(game, "Kazandu Refuge", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = KazanduRefuge;
