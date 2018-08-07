"use strict";
const Constants = require ("../../../Constants");
const EmpyrialArmorBase = require("../setVMA/EmpyrialArmor");

class EmpyrialArmor extends EmpyrialArmorBase {
  constructor (game) {
    super(game, "Empyrial Armor", "Magic Online Theme Decks", "TD0");
  }
}

module.exports = EmpyrialArmor;
