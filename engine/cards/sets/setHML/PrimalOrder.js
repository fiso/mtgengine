"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PrimalOrderBase = require("../set5ED/PrimalOrder.js");

class PrimalOrder extends PrimalOrderBase {
  constructor(game) {
    super(game, "Primal Order", "Homelands", "HML");
  }
}

module.exports = PrimalOrder;
