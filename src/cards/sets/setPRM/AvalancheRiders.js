"use strict";
const Constants = require ("../../../Constants");
const AvalancheRidersBase = require("../setTSB/AvalancheRiders");

class AvalancheRiders extends AvalancheRidersBase {
  constructor (game) {
    super(game, "Avalanche Riders", "Magic Online Promos", "PRM");
  }
}

module.exports = AvalancheRiders;
