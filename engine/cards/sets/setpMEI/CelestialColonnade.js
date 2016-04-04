"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CelestialColonnade extends Card {
  constructor(game) {
    super(game, "Celestial Colonnade", "Media Inserts", "pMEI");
  }
}

module.exports = CelestialColonnade;
