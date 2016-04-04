"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CombatMedicBase = require("../setATH/CombatMedic.js");

class CombatMedic extends CombatMedicBase {
  constructor(game) {
    super(game, "Combat Medic", "Masters Edition II", "ME2");
  }
}

module.exports = CombatMedic;
