"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EnergyFluxBase = require("../setATQ/EnergyFlux.js");

class EnergyFlux extends EnergyFluxBase {
  constructor(game) {
    super(game, "Energy Flux", "Fourth Edition", "4ED");
  }
}

module.exports = EnergyFlux;
