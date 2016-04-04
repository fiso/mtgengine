"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SoldeviSimulacrumBase = require("../setICE/SoldeviSimulacrum.js");

class SoldeviSimulacrum extends SoldeviSimulacrumBase {
  constructor(game) {
    super(game, "Soldevi Simulacrum", "Masters Edition II", "ME2");
  }
}

module.exports = SoldeviSimulacrum;
