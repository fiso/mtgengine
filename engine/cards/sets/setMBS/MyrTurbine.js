"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MyrTurbine extends Card {
  constructor(game) {
    super(game, "Myr Turbine", "Mirrodin Besieged", "MBS");
  }
}

module.exports = MyrTurbine;
