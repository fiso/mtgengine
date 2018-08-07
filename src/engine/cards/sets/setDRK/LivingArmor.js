"use strict";
const Constants = require ("../../../Constants");
const LivingArmorBase = require("../setCHR/LivingArmor");

class LivingArmor extends LivingArmorBase {
  constructor (game) {
    super(game, "Living Armor", "The Dark", "DRK");
  }
}

module.exports = LivingArmor;
