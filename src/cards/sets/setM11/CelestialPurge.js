"use strict";
const Constants = require ("../../../Constants");
const CelestialPurgeBase = require("../setCON/CelestialPurge");

class CelestialPurge extends CelestialPurgeBase {
  constructor (game) {
    super(game, "Celestial Purge", "Magic 2011", "M11");
  }
}

module.exports = CelestialPurge;
