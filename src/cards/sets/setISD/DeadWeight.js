"use strict";
const Constants = require ("../../../Constants");
const DeadWeightBase = require("../setSOI/DeadWeight");

class DeadWeight extends DeadWeightBase {
  constructor (game) {
    super(game, "Dead Weight", "Innistrad", "ISD");
  }
}

module.exports = DeadWeight;
