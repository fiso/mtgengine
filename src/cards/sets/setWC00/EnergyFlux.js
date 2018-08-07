"use strict";
const Constants = require ("../../../Constants");
const EnergyFluxBase = require("../setME4/EnergyFlux");

class EnergyFlux extends EnergyFluxBase {
  constructor (game) {
    super(game, "Energy Flux", "World Championship Decks 2000", "WC00");
  }
}

module.exports = EnergyFlux;
