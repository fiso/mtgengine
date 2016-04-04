"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EnergyVortex extends Card {
  constructor(game) {
    super(game, "Energy Vortex", "Mirage", "MIR");
  }
}

module.exports = EnergyVortex;
