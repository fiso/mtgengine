"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GhostQuarterBase = require("../setC14/GhostQuarter.js");

class GhostQuarter extends GhostQuarterBase {
  constructor(game) {
    super(game, "Ghost Quarter", "Innistrad", "ISD");
  }
}

module.exports = GhostQuarter;
