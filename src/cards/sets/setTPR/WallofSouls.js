"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WallofSouls extends UnimplementedCard {
  constructor (game) {
    super(game, "Wall of Souls", "Tempest Remastered", "TPR");
  }
}

module.exports = WallofSouls;
