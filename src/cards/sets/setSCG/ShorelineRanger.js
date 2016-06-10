"use strict";
const Constants = require ("../../../Constants");
const ShorelineRangerBase = require("../setCNS/ShorelineRanger");

class ShorelineRanger extends ShorelineRangerBase {
  constructor (game) {
    super(game, "Shoreline Ranger", "Scourge", "SCG");
  }
}

module.exports = ShorelineRanger;
