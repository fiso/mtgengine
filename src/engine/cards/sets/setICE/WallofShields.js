"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WallofShields extends UnimplementedCard {
  constructor (game) {
    super(game, "Wall of Shields", "Ice Age", "ICE");
  }
}

module.exports = WallofShields;
