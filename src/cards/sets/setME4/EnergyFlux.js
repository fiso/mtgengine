"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EnergyFlux extends UnimplementedCard {
  constructor (game) {
    super(game, "Energy Flux", "Masters Edition IV", "ME4");
  }
}

module.exports = EnergyFlux;
