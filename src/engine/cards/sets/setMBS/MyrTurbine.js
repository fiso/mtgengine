"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MyrTurbine extends UnimplementedCard {
  constructor (game) {
    super(game, "Myr Turbine", "Mirrodin Besieged", "MBS");
  }
}

module.exports = MyrTurbine;
