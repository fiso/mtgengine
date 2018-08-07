"use strict";
const Constants = require ("../../../Constants");
const GrislySalvageBase = require("../setC18/GrislySalvage");

class GrislySalvage extends GrislySalvageBase {
  constructor (game) {
    super(game, "Grisly Salvage", "Commander Anthology", "CMA");
  }
}

module.exports = GrislySalvage;
