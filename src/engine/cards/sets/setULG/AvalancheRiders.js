"use strict";
const Constants = require ("../../../Constants");
const AvalancheRidersBase = require("../setTSB/AvalancheRiders");

class AvalancheRiders extends AvalancheRidersBase {
  constructor (game) {
    super(game, "Avalanche Riders", "Urza's Legacy", "ULG");
  }
}

module.exports = AvalancheRiders;
