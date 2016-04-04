"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CelestialPurgeBase = require("../setCON/CelestialPurge.js");

class CelestialPurge extends CelestialPurgeBase {
  constructor(game) {
    super(game, "Celestial Purge", "Magic Player Rewards", "pMPR");
  }
}

module.exports = CelestialPurge;
