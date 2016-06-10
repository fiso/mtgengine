"use strict";
const Constants = require ("../../../Constants");
const StalkingStonesBase = require("../setDDF/StalkingStones");

class StalkingStones extends StalkingStonesBase {
  constructor (game) {
    super(game, "Stalking Stones", "Mirrodin", "MRD");
  }
}

module.exports = StalkingStones;
