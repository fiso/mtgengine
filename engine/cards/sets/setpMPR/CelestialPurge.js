"use strict";
const Constants = require ("../../../Constants");
const CelestialPurgeBase = require("../setCON/CelestialPurge");

class CelestialPurge extends CelestialPurgeBase {
  constructor(game) {
    super(game, "Celestial Purge", "Magic Player Rewards", "pMPR");
  }
}

module.exports = CelestialPurge;
