"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EmpyrialArmorBase = require("../setpARL/EmpyrialArmor.js");

class EmpyrialArmor extends EmpyrialArmorBase {
  constructor(game) {
    super(game, "Empyrial Armor", "Vintage Masters", "VMA");
  }
}

module.exports = EmpyrialArmor;
