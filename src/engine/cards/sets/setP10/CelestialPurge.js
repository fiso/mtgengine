"use strict";
const Constants = require ("../../../Constants");
const CelestialPurgeBase = require("../setMM2/CelestialPurge");

class CelestialPurge extends CelestialPurgeBase {
  constructor (game) {
    super(game, "Celestial Purge", "Magic Player Rewards 2010", "P10");
  }
}

module.exports = CelestialPurge;
