"use strict";
const Constants = require ("../../../Constants");
const BuriedRuinBase = require("../setC18/BuriedRuin");

class BuriedRuin extends BuriedRuinBase {
  constructor (game) {
    super(game, "Buried Ruin", "Magic 2012", "M12");
  }
}

module.exports = BuriedRuin;
