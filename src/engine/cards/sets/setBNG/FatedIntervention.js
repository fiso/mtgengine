"use strict";
const Constants = require ("../../../Constants");
const FatedInterventionBase = require("../setCP1/FatedIntervention");

class FatedIntervention extends FatedInterventionBase {
  constructor (game) {
    super(game, "Fated Intervention", "Born of the Gods", "BNG");
  }
}

module.exports = FatedIntervention;
