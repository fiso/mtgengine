"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WallofEssence extends UnimplementedCard {
  constructor (game) {
    super(game, "Wall of Essence", "Tempest Remastered", "TPR");
  }
}

module.exports = WallofEssence;
