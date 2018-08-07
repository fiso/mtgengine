"use strict";
const Constants = require ("../../../Constants");
const ParadoxicalOutcomeBase = require("../setKLD/ParadoxicalOutcome");

class ParadoxicalOutcome extends ParadoxicalOutcomeBase {
  constructor (game) {
    super(game, "Paradoxical Outcome", "Kaladesh Promos", "PKLD");
  }
}

module.exports = ParadoxicalOutcome;
