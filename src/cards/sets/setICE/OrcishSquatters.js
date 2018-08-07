"use strict";
const Constants = require ("../../../Constants");
const OrcishSquattersBase = require("../setME2/OrcishSquatters");

class OrcishSquatters extends OrcishSquattersBase {
  constructor (game) {
    super(game, "Orcish Squatters", "Ice Age", "ICE");
  }
}

module.exports = OrcishSquatters;
