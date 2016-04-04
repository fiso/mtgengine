"use strict";
const Constants = require ("../../../Constants");
const DriftingMeadowBase = require("../setATH/DriftingMeadow");

class DriftingMeadow extends DriftingMeadowBase {
  constructor(game) {
    super(game, "Drifting Meadow", "Battle Royale Box Set", "BRB");
  }
}

module.exports = DriftingMeadow;
