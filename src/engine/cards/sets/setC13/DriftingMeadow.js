"use strict";
const Constants = require ("../../../Constants");
const DriftingMeadowBase = require("../setCM2/DriftingMeadow");

class DriftingMeadow extends DriftingMeadowBase {
  constructor (game) {
    super(game, "Drifting Meadow", "Commander 2013", "C13");
  }
}

module.exports = DriftingMeadow;
