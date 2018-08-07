"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WallofMulch extends UnimplementedCard {
  constructor (game) {
    super(game, "Wall of Mulch", "Magic 2015", "M15");
  }
}

module.exports = WallofMulch;
