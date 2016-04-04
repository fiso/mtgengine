"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CelestialPurgeBase = require("../setCON/CelestialPurge.js");

class CelestialPurge extends CelestialPurgeBase {
  constructor(game) {
    super(game, "Celestial Purge", "Magic 2011", "M11");
  }
}

module.exports = CelestialPurge;
