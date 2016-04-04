"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EnergyFlux extends Card {
  constructor(game) {
    super(game, "Energy Flux", "Antiquities", "ATQ");
  }
}

module.exports = EnergyFlux;
