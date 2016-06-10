"use strict";
const Constants = require ("../../../Constants");
const DriftingMeadowBase = require("../setATH/DriftingMeadow");

class DriftingMeadow extends DriftingMeadowBase {
  constructor (game) {
    super(game, "Drifting Meadow", "Commander 2014", "C14");
  }
}

module.exports = DriftingMeadow;
