"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DeadWeightBase = require("../setISD/DeadWeight.js");

class DeadWeight extends DeadWeightBase {
  constructor(game) {
    super(game, "Dead Weight", "Shadows over Innistrad", "SOI");
  }
}

module.exports = DeadWeight;
