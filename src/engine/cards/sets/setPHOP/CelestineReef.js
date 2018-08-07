"use strict";
const Constants = require ("../../../Constants");
const CelestineReefBase = require("../setPCA/CelestineReef");

class CelestineReef extends CelestineReefBase {
  constructor (game) {
    super(game, "Celestine Reef", "Promotional Planes", "PHOP");
  }
}

module.exports = CelestineReef;
