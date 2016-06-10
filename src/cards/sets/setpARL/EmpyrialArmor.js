"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EmpyrialArmor extends UnimplementedCard {
  constructor (game) {
    super(game, "Empyrial Armor", "Arena League", "pARL");
  }
}

module.exports = EmpyrialArmor;
