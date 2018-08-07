"use strict";
const Constants = require ("../../../Constants");
const DriftingMeadowBase = require("../setCM2/DriftingMeadow");

class DriftingMeadow extends DriftingMeadowBase {
  constructor (game) {
    super(game, "Drifting Meadow", "Urza's Saga", "USG");
  }
}

module.exports = DriftingMeadow;
