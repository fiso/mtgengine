"use strict";
const Constants = require ("../../../Constants");
const UndergroundRiverBase = require("../setCM2/UndergroundRiver");

class UndergroundRiver extends UndergroundRiverBase {
  constructor (game) {
    super(game, "Underground River", "Seventh Edition", "7ED");
  }
}

module.exports = UndergroundRiver;
