"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GhostQuarterBase = require("../setC14/GhostQuarter.js");

class GhostQuarter extends GhostQuarterBase {
  constructor(game) {
    super(game, "Ghost Quarter", "Commander 2015", "C15");
  }
}

module.exports = GhostQuarter;
