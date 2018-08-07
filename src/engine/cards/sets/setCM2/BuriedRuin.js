"use strict";
const Constants = require ("../../../Constants");
const BuriedRuinBase = require("../setC18/BuriedRuin");

class BuriedRuin extends BuriedRuinBase {
  constructor (game) {
    super(game, "Buried Ruin", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = BuriedRuin;
