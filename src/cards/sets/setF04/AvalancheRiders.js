"use strict";
const Constants = require ("../../../Constants");
const AvalancheRidersBase = require("../setTSB/AvalancheRiders");

class AvalancheRiders extends AvalancheRidersBase {
  constructor (game) {
    super(game, "Avalanche Riders", "Friday Night Magic 2004", "F04");
  }
}

module.exports = AvalancheRiders;
