"use strict";
const Constants = require ("../../../Constants");
const UndergroundRiverBase = require("../setCM2/UndergroundRiver");

class UndergroundRiver extends UndergroundRiverBase {
  constructor (game) {
    super(game, "Underground River", "World Championship Decks 2002", "WC02");
  }
}

module.exports = UndergroundRiver;
