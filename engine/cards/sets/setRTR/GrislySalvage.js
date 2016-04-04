"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GrislySalvageBase = require("../setC15/GrislySalvage.js");

class GrislySalvage extends GrislySalvageBase {
  constructor(game) {
    super(game, "Grisly Salvage", "Return to Ravnica", "RTR");
  }
}

module.exports = GrislySalvage;
