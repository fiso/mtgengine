"use strict";
const Constants = require ("../../../Constants");
const RealityShapingBase = require("../setPCA/RealityShaping");

class RealityShaping extends RealityShapingBase {
  constructor (game) {
    super(game, "Reality Shaping", "Planechase 2012", "PC2");
  }
}

module.exports = RealityShaping;
