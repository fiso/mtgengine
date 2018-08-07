"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LivingArmor extends UnimplementedCard {
  constructor (game) {
    super(game, "Living Armor", "Chronicles", "CHR");
  }
}

module.exports = LivingArmor;
