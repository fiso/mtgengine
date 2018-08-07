"use strict";
const Constants = require ("../../../Constants");
const VolcanicVisionBase = require("../setDDS/VolcanicVision");

class VolcanicVision extends VolcanicVisionBase {
  constructor (game) {
    super(game, "Volcanic Vision", "Dragons of Tarkir", "DTK");
  }
}

module.exports = VolcanicVision;
