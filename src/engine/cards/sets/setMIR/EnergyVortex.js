"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EnergyVortex extends UnimplementedCard {
  constructor (game) {
    super(game, "Energy Vortex", "Mirage", "MIR");
  }
}

module.exports = EnergyVortex;
