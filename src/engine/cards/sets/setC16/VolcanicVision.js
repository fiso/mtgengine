"use strict";
const Constants = require ("../../../Constants");
const VolcanicVisionBase = require("../setDDS/VolcanicVision");

class VolcanicVision extends VolcanicVisionBase {
  constructor (game) {
    super(game, "Volcanic Vision", "Commander 2016", "C16");
  }
}

module.exports = VolcanicVision;
