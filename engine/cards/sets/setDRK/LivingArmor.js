"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LivingArmorBase = require("../setCHR/LivingArmor.js");

class LivingArmor extends LivingArmorBase {
  constructor(game) {
    super(game, "Living Armor", "The Dark", "DRK");
  }
}

module.exports = LivingArmor;
