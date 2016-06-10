"use strict";
const Constants = require ("../../../Constants");
const DivineInterventionBase = require("../setLEG/DivineIntervention");

class DivineIntervention extends DivineInterventionBase {
  constructor (game) {
    super(game, "Divine Intervention", "Masters Edition III", "ME3");
  }
}

module.exports = DivineIntervention;
