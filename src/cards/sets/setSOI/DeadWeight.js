"use strict";
const Constants = require ("../../../Constants");
const DeadWeightBase = require("../setISD/DeadWeight");

class DeadWeight extends DeadWeightBase {
  constructor(game) {
    super(game, "Dead Weight", "Shadows over Innistrad", "SOI");
  }
}

module.exports = DeadWeight;
