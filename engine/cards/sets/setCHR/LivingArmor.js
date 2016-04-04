"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LivingArmor extends Card {
  constructor(game) {
    super(game, "Living Armor", "Chronicles", "CHR");
  }
}

module.exports = LivingArmor;
