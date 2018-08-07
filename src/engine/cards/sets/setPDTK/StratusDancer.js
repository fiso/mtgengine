"use strict";
const Constants = require ("../../../Constants");
const StratusDancerBase = require("../setDTK/StratusDancer");

class StratusDancer extends StratusDancerBase {
  constructor (game) {
    super(game, "Stratus Dancer", "Dragons of Tarkir Promos", "PDTK");
  }
}

module.exports = StratusDancer;
