"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BuriedRuinBase = require("../setC14/BuriedRuin.js");

class BuriedRuin extends BuriedRuinBase {
  constructor(game) {
    super(game, "Buried Ruin", "Magic 2012", "M12");
  }
}

module.exports = BuriedRuin;
