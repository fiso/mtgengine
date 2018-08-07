"use strict";
const Constants = require ("../../../Constants");
const EmpyrialArmorBase = require("../setVMA/EmpyrialArmor");

class EmpyrialArmor extends EmpyrialArmorBase {
  constructor (game) {
    super(game, "Empyrial Armor", "Arena League 2001", "PAL01");
  }
}

module.exports = EmpyrialArmor;
