"use strict";
const Constants = require ("../../../Constants");
const SlimeMoldingBase = require("../setMM3/SlimeMolding");

class SlimeMolding extends SlimeMoldingBase {
  constructor (game) {
    super(game, "Slime Molding", "Return to Ravnica", "RTR");
  }
}

module.exports = SlimeMolding;
