"use strict";
const Constants = require ("../../../Constants");
const AvalancheRidersBase = require("../setpFNM/AvalancheRiders");

class AvalancheRiders extends AvalancheRidersBase {
  constructor(game) {
    super(game, "Avalanche Riders", "Time Spiral "Timeshifted"", "TSB");
  }
}

module.exports = AvalancheRiders;
