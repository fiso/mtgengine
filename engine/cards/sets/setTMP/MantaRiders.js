"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MantaRidersBase = require("../setBRB/MantaRiders.js");

class MantaRiders extends MantaRidersBase {
  constructor(game) {
    super(game, "Manta Riders", "Tempest", "TMP");
  }
}

module.exports = MantaRiders;
