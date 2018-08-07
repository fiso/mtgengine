"use strict";
const Constants = require ("../../../Constants");
const SejiriRefugeBase = require("../setC18/SejiriRefuge");

class SejiriRefuge extends SejiriRefugeBase {
  constructor (game) {
    super(game, "Sejiri Refuge", "Commander 2013", "C13");
  }
}

module.exports = SejiriRefuge;
