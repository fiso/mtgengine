"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WallofLava extends UnimplementedCard {
  constructor(game) {
    super(game, "Wall of Lava", "Ice Age", "ICE");
  }
}

module.exports = WallofLava;
