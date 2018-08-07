"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThermalFlux extends UnimplementedCard {
  constructor (game) {
    super(game, "Thermal Flux", "Coldsnap", "CSP");
  }
}

module.exports = ThermalFlux;
