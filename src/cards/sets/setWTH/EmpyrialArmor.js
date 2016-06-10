"use strict";
const Constants = require ("../../../Constants");
const EmpyrialArmorBase = require("../setpARL/EmpyrialArmor");

class EmpyrialArmor extends EmpyrialArmorBase {
  constructor (game) {
    super(game, "Empyrial Armor", "Weatherlight", "WTH");
  }
}

module.exports = EmpyrialArmor;
