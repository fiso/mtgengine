"use strict";
const Constants = require ("../../../Constants");
const CelestialDawnBase = require("../setTSB/CelestialDawn");

class CelestialDawn extends CelestialDawnBase {
  constructor (game) {
    super(game, "Celestial Dawn", "Classic Sixth Edition", "6ED");
  }
}

module.exports = CelestialDawn;
