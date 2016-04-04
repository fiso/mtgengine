"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EnergyFluxBase = require("../setATQ/EnergyFlux.js");

class EnergyFlux extends EnergyFluxBase {
  constructor(game) {
    super(game, "Energy Flux", "Fifth Edition", "5ED");
  }
}

module.exports = EnergyFlux;
