"use strict";
const Constants = require ("../../../Constants");
const CombatMedicBase = require("../setATH/CombatMedic");

class CombatMedic extends CombatMedicBase {
  constructor (game) {
    super(game, "Combat Medic", "Masters Edition II", "ME2");
  }
}

module.exports = CombatMedic;
