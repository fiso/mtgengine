"use strict";
const Constants = require ("../../../Constants");
const SejiriRefugeBase = require("../setC13/SejiriRefuge");

class SejiriRefuge extends SejiriRefugeBase {
  constructor(game) {
    super(game, "Sejiri Refuge", "Zendikar", "ZEN");
  }
}

module.exports = SejiriRefuge;
