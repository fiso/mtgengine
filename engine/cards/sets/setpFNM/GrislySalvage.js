"use strict";
const Constants = require ("../../../Constants");
const GrislySalvageBase = require("../setC15/GrislySalvage");

class GrislySalvage extends GrislySalvageBase {
  constructor(game) {
    super(game, "Grisly Salvage", "Friday Night Magic", "pFNM");
  }
}

module.exports = GrislySalvage;
