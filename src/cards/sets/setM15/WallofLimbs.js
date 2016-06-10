"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WallofLimbs extends UnimplementedCard {
  constructor (game) {
    super(game, "Wall of Limbs", "Magic 2015 Core Set", "M15");
  }
}

module.exports = WallofLimbs;
