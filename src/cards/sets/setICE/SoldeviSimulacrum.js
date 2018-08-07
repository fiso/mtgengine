"use strict";
const Constants = require ("../../../Constants");
const SoldeviSimulacrumBase = require("../setME2/SoldeviSimulacrum");

class SoldeviSimulacrum extends SoldeviSimulacrumBase {
  constructor (game) {
    super(game, "Soldevi Simulacrum", "Ice Age", "ICE");
  }
}

module.exports = SoldeviSimulacrum;
