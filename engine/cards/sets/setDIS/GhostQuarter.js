"use strict";
const Constants = require ("../../../Constants");
const GhostQuarterBase = require("../setC14/GhostQuarter");

class GhostQuarter extends GhostQuarterBase {
  constructor(game) {
    super(game, "Ghost Quarter", "Dissension", "DIS");
  }
}

module.exports = GhostQuarter;
