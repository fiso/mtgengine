"use strict";
const Constants = require ("../../../Constants");
const ShorelineRangerBase = require("../setA25/ShorelineRanger");

class ShorelineRanger extends ShorelineRangerBase {
  constructor (game) {
    super(game, "Shoreline Ranger", "Conspiracy", "CNS");
  }
}

module.exports = ShorelineRanger;
