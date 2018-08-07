"use strict";
const Constants = require ("../../../Constants");
const CelestialPurgeBase = require("../setMM2/CelestialPurge");

class CelestialPurge extends CelestialPurgeBase {
  constructor (game) {
    super(game, "Celestial Purge", "Conflux", "CON");
  }
}

module.exports = CelestialPurge;
