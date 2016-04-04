"use strict";
const Constants = require ("../../../Constants");
const DriftingMeadowBase = require("../setATH/DriftingMeadow");

class DriftingMeadow extends DriftingMeadowBase {
  constructor(game) {
    super(game, "Drifting Meadow", "Urza's Saga", "USG");
  }
}

module.exports = DriftingMeadow;
