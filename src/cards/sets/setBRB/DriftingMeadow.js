"use strict";
const Constants = require ("../../../Constants");
const DriftingMeadowBase = require("../setCM2/DriftingMeadow");

class DriftingMeadow extends DriftingMeadowBase {
  constructor (game) {
    super(game, "Drifting Meadow", "Battle Royale Box Set", "BRB");
  }
}

module.exports = DriftingMeadow;
