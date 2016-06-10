"use strict";
const Constants = require ("../../../Constants");
const OrcishSquattersBase = require("../set5ED/OrcishSquatters");

class OrcishSquatters extends OrcishSquattersBase {
  constructor (game) {
    super(game, "Orcish Squatters", "Masters Edition II", "ME2");
  }
}

module.exports = OrcishSquatters;
