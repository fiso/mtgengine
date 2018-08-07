"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LivingTotem extends UnimplementedCard {
  constructor (game) {
    super(game, "Living Totem", "Magic 2015", "M15");
  }
}

module.exports = LivingTotem;
