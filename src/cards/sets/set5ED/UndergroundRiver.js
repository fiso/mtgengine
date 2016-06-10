"use strict";
const Constants = require ("../../../Constants");
const UndergroundRiverBase = require("../set6ED/UndergroundRiver");

class UndergroundRiver extends UndergroundRiverBase {
  constructor (game) {
    super(game, "Underground River", "Fifth Edition", "5ED");
  }
}

module.exports = UndergroundRiver;
