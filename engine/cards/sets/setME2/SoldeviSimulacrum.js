"use strict";
const Constants = require ("../../../Constants");
const SoldeviSimulacrumBase = require("../setICE/SoldeviSimulacrum");

class SoldeviSimulacrum extends SoldeviSimulacrumBase {
  constructor(game) {
    super(game, "Soldevi Simulacrum", "Masters Edition II", "ME2");
  }
}

module.exports = SoldeviSimulacrum;
