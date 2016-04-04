"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GhostQuarterBase = require("../setC14/GhostQuarter.js");

class GhostQuarter extends GhostQuarterBase {
  constructor(game) {
    super(game, "Ghost Quarter", "Modern Event Deck 2014", "MD1");
  }
}

module.exports = GhostQuarter;
