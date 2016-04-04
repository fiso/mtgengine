"use strict";
const Constants = require ("../../../Constants");
const ScarwoodBanditsBase = require("../setME4/ScarwoodBandits");

class ScarwoodBandits extends ScarwoodBanditsBase {
  constructor(game) {
    super(game, "Scarwood Bandits", "The Dark", "DRK");
  }
}

module.exports = ScarwoodBandits;
