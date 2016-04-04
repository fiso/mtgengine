"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EnergyFlux extends UnimplementedCard {
  constructor(game) {
    super(game, "Energy Flux", "Antiquities", "ATQ");
  }
}

module.exports = EnergyFlux;
