"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CelestialGatekeeper extends UnimplementedCard {
  constructor (game) {
    super(game, "Celestial Gatekeeper", "Legions", "LGN");
  }
}

module.exports = CelestialGatekeeper;
