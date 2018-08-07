"use strict";
const Constants = require ("../../../Constants");
const MantaRidersBase = require("../setBRB/MantaRiders");

class MantaRiders extends MantaRidersBase {
  constructor (game) {
    super(game, "Manta Riders", "Tempest", "TMP");
  }
}

module.exports = MantaRiders;
