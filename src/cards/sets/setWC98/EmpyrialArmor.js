"use strict";
const Constants = require ("../../../Constants");
const EmpyrialArmorBase = require("../setVMA/EmpyrialArmor");

class EmpyrialArmor extends EmpyrialArmorBase {
  constructor (game) {
    super(game, "Empyrial Armor", "World Championship Decks 1998", "WC98");
  }
}

module.exports = EmpyrialArmor;
