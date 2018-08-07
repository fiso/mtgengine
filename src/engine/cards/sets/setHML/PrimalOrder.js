"use strict";
const Constants = require ("../../../Constants");
const PrimalOrderBase = require("../setMED/PrimalOrder");

class PrimalOrder extends PrimalOrderBase {
  constructor (game) {
    super(game, "Primal Order", "Homelands", "HML");
  }
}

module.exports = PrimalOrder;
