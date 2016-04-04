"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SolemnSimulacrumBase = require("../setC14/SolemnSimulacrum.js");

class SolemnSimulacrum extends SolemnSimulacrumBase {
  constructor(game) {
    super(game, "Solemn Simulacrum", "Mirrodin", "MRD");
  }
}

module.exports = SolemnSimulacrum;
