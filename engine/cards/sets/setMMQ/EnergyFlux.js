"use strict";
const Constants = require ("../../../Constants");
const EnergyFluxBase = require("../setATQ/EnergyFlux");

class EnergyFlux extends EnergyFluxBase {
  constructor(game) {
    super(game, "Energy Flux", "Mercadian Masques", "MMQ");
  }
}

module.exports = EnergyFlux;
