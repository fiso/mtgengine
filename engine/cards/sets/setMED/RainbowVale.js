"use strict";
const Constants = require ("../../../Constants");
const RainbowValeBase = require("../setFEM/RainbowVale");

class RainbowVale extends RainbowValeBase {
  constructor(game) {
    super(game, "Rainbow Vale", "Masters Edition", "MED");
  }
}

module.exports = RainbowVale;
