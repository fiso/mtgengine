"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EmpyrialArmor extends Card {
  constructor(game) {
    super(game, "Empyrial Armor", "Arena League", "pARL");
  }
}

module.exports = EmpyrialArmor;
