"use strict";
const Constants = require ("../../../Constants");
const SlayersPlateBase = require("../setSOI/SlayersPlate");

class SlayersPlate extends SlayersPlateBase {
  constructor (game) {
    super(game, "Slayer's Plate", "Shadows over Innistrad Promos", "PSOI");
  }
}

module.exports = SlayersPlate;
