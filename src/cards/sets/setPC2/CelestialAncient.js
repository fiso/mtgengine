"use strict";
const Constants = require ("../../../Constants");
const CelestialAncientBase = require("../setPCA/CelestialAncient");

class CelestialAncient extends CelestialAncientBase {
  constructor (game) {
    super(game, "Celestial Ancient", "Planechase 2012", "PC2");
  }
}

module.exports = CelestialAncient;
