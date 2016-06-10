"use strict";
const Constants = require ("../../../Constants");
const KazanduRefugeBase = require("../setARC/KazanduRefuge");

class KazanduRefuge extends KazanduRefugeBase {
  constructor (game) {
    super(game, "Kazandu Refuge", "Zendikar", "ZEN");
  }
}

module.exports = KazanduRefuge;
