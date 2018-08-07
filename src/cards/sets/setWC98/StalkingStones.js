"use strict";
const Constants = require ("../../../Constants");
const StalkingStonesBase = require("../setTPR/StalkingStones");

class StalkingStones extends StalkingStonesBase {
  constructor (game) {
    super(game, "Stalking Stones", "World Championship Decks 1998", "WC98");
  }
}

module.exports = StalkingStones;
