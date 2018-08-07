"use strict";
const Constants = require ("../../../Constants");
const FatedInterventionBase = require("../setCP1/FatedIntervention");

class FatedIntervention extends FatedInterventionBase {
  constructor (game) {
    super(game, "Fated Intervention", "Magic Online Promos", "PRM");
  }
}

module.exports = FatedIntervention;
