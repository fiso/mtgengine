"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LivingTotem extends UnimplementedCard {
  constructor (game) {
    super(game, "Living Totem", "Magic 2015 Core Set", "M15");
  }
}

module.exports = LivingTotem;
