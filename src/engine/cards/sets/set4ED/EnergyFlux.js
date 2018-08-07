"use strict";
const Constants = require ("../../../Constants");
const EnergyFluxBase = require("../setME4/EnergyFlux");

class EnergyFlux extends EnergyFluxBase {
  constructor (game) {
    super(game, "Energy Flux", "Fourth Edition", "4ED");
  }
}

module.exports = EnergyFlux;
