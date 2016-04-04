"use strict";
const Constants = require ("../../../Constants");
const GhostQuarterBase = require("../setC14/GhostQuarter");

class GhostQuarter extends GhostQuarterBase {
  constructor(game) {
    super(game, "Ghost Quarter", "Modern Event Deck 2014", "MD1");
  }
}

module.exports = GhostQuarter;
