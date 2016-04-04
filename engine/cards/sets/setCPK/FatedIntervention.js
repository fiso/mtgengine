"use strict";
const Constants = require ("../../../Constants");
const FatedInterventionBase = require("../setBNG/FatedIntervention");

class FatedIntervention extends FatedInterventionBase {
  constructor(game) {
    super(game, "Fated Intervention", "Clash Pack", "CPK");
  }
}

module.exports = FatedIntervention;
