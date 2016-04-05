"use strict";
const Constants = require ("../../../Constants");
const RapidHybridizationBase = require("../setC15/RapidHybridization");

class RapidHybridization extends RapidHybridizationBase {
  constructor(game) {
    super(game, "Rapid Hybridization", "Gatecrash", "GTC");
  }
}

module.exports = RapidHybridization;
