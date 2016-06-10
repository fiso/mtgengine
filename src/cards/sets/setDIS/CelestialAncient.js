"use strict";
const Constants = require ("../../../Constants");
const CelestialAncientBase = require("../setC15/CelestialAncient");

class CelestialAncient extends CelestialAncientBase {
  constructor (game) {
    super(game, "Celestial Ancient", "Dissension", "DIS");
  }
}

module.exports = CelestialAncient;
