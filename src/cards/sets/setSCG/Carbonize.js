"use strict";
const Constants = require ("../../../Constants");
const CarbonizeBase = require("../setEMA/Carbonize");

class Carbonize extends CarbonizeBase {
  constructor (game) {
    super(game, "Carbonize", "Scourge", "SCG");
  }
}

module.exports = Carbonize;
