"use strict";
const Constants = require ("../../../Constants");
const WakedancerBase = require("../setEMA/Wakedancer");

class Wakedancer extends WakedancerBase {
  constructor (game) {
    super(game, "Wakedancer", "Conspiracy", "CNS");
  }
}

module.exports = Wakedancer;
