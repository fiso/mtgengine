"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CombatMedicBase = require("../setATH/CombatMedic.js");

class CombatMedic extends CombatMedicBase {
  constructor(game) {
    super(game, "Combat Medic", "Fallen Empires", "FEM");
  }
}

module.exports = CombatMedic;
