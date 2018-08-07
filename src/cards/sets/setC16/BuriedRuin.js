"use strict";
const Constants = require ("../../../Constants");
const BuriedRuinBase = require("../setC18/BuriedRuin");

class BuriedRuin extends BuriedRuinBase {
  constructor (game) {
    super(game, "Buried Ruin", "Commander 2016", "C16");
  }
}

module.exports = BuriedRuin;
