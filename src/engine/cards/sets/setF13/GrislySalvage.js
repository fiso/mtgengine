"use strict";
const Constants = require ("../../../Constants");
const GrislySalvageBase = require("../setC18/GrislySalvage");

class GrislySalvage extends GrislySalvageBase {
  constructor (game) {
    super(game, "Grisly Salvage", "Friday Night Magic 2013", "F13");
  }
}

module.exports = GrislySalvage;
