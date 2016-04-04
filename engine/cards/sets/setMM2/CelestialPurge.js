"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CelestialPurgeBase = require("../setCON/CelestialPurge.js");

class CelestialPurge extends CelestialPurgeBase {
  constructor(game) {
    super(game, "Celestial Purge", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = CelestialPurge;
