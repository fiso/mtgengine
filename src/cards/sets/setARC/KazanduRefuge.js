"use strict";
const Constants = require ("../../../Constants");
const KazanduRefugeBase = require("../setC18/KazanduRefuge");

class KazanduRefuge extends KazanduRefugeBase {
  constructor (game) {
    super(game, "Kazandu Refuge", "Archenemy", "ARC");
  }
}

module.exports = KazanduRefuge;
