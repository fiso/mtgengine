"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LivingLands extends UnimplementedCard {
  constructor (game) {
    super(game, "Living Lands", "Masters Edition IV", "ME4");
  }
}

module.exports = LivingLands;
