"use strict";
const Constants = require ("../../../Constants");
const PrimalOrderBase = require("../setMED/PrimalOrder");

class PrimalOrder extends PrimalOrderBase {
  constructor (game) {
    super(game, "Primal Order", "Fifth Edition", "5ED");
  }
}

module.exports = PrimalOrder;
