"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ShorelineRangerBase = require("../setCNS/ShorelineRanger.js");

class ShorelineRanger extends ShorelineRangerBase {
  constructor(game) {
    super(game, "Shoreline Ranger", "Scourge", "SCG");
  }
}

module.exports = ShorelineRanger;
