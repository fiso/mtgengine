"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WallofLimbs extends UnimplementedCard {
  constructor (game) {
    super(game, "Wall of Limbs", "Magic 2015", "M15");
  }
}

module.exports = WallofLimbs;
