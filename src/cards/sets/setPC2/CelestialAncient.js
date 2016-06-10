"use strict";
const Constants = require ("../../../Constants");
const CelestialAncientBase = require("../setC15/CelestialAncient");

class CelestialAncient extends CelestialAncientBase {
  constructor (game) {
    super(game, "Celestial Ancient", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = CelestialAncient;
