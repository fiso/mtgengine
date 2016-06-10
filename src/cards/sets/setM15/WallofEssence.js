"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WallofEssence extends UnimplementedCard {
  constructor (game) {
    super(game, "Wall of Essence", "Magic 2015 Core Set", "M15");
  }
}

module.exports = WallofEssence;
