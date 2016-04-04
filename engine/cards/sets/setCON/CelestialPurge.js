"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CelestialPurge extends Card {
  constructor(game) {
    super(game, "Celestial Purge", "Conflux", "CON");
  }
}

module.exports = CelestialPurge;
