"use strict";
const Constants = require ("../../../Constants");
const CelestialPurgeBase = require("../setCON/CelestialPurge");

class CelestialPurge extends CelestialPurgeBase {
  constructor (game) {
    super(game, "Celestial Purge", "Magic 2012", "M12");
  }
}

module.exports = CelestialPurge;
