"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DriftingMeadowBase = require("../setATH/DriftingMeadow.js");

class DriftingMeadow extends DriftingMeadowBase {
  constructor(game) {
    super(game, "Drifting Meadow", "Urza's Saga", "USG");
  }
}

module.exports = DriftingMeadow;
