"use strict";
const Constants = require ("../../../Constants");
const MechanizedProductionBase = require("../setAER/MechanizedProduction");

class MechanizedProduction extends MechanizedProductionBase {
  constructor (game) {
    super(game, "Mechanized Production", "Aether Revolt Promos", "PAER");
  }
}

module.exports = MechanizedProduction;
