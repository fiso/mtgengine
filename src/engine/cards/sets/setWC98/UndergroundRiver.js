"use strict";
const Constants = require ("../../../Constants");
const UndergroundRiverBase = require("../setCM2/UndergroundRiver");

class UndergroundRiver extends UndergroundRiverBase {
  constructor (game) {
    super(game, "Underground River", "World Championship Decks 1998", "WC98");
  }
}

module.exports = UndergroundRiver;
