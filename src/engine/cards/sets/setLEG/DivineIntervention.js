"use strict";
const Constants = require ("../../../Constants");
const DivineInterventionBase = require("../setME3/DivineIntervention");

class DivineIntervention extends DivineInterventionBase {
  constructor (game) {
    super(game, "Divine Intervention", "Legends", "LEG");
  }
}

module.exports = DivineIntervention;
