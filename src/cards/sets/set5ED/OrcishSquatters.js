"use strict";
const Constants = require ("../../../Constants");
const OrcishSquattersBase = require("../setME2/OrcishSquatters");

class OrcishSquatters extends OrcishSquattersBase {
  constructor (game) {
    super(game, "Orcish Squatters", "Fifth Edition", "5ED");
  }
}

module.exports = OrcishSquatters;
