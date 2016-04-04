"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CelestialGatekeeper extends Card {
  constructor(game) {
    super(game, "Celestial Gatekeeper", "Legions", "LGN");
  }
}

module.exports = CelestialGatekeeper;
