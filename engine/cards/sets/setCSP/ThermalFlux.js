"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ThermalFlux extends Card {
  constructor(game) {
    super(game, "Thermal Flux", "Coldsnap", "CSP");
  }
}

module.exports = ThermalFlux;
