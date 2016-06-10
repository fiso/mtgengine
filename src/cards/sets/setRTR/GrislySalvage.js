"use strict";
const Constants = require ("../../../Constants");
const GrislySalvageBase = require("../setC15/GrislySalvage");

class GrislySalvage extends GrislySalvageBase {
  constructor (game) {
    super(game, "Grisly Salvage", "Return to Ravnica", "RTR");
  }
}

module.exports = GrislySalvage;
