"use strict";
const Constants = require ("../../../Constants");
const CombatMedicBase = require("../setME2/CombatMedic");

class CombatMedic extends CombatMedicBase {
  constructor (game) {
    super(game, "Combat Medic", "Anthologies", "ATH");
  }
}

module.exports = CombatMedic;
