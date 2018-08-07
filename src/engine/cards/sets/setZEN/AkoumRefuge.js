"use strict";
const Constants = require ("../../../Constants");
const AkoumRefugeBase = require("../setC18/AkoumRefuge");

class AkoumRefuge extends AkoumRefugeBase {
  constructor (game) {
    super(game, "Akoum Refuge", "Zendikar", "ZEN");
  }
}

module.exports = AkoumRefuge;
