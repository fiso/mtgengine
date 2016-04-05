"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WallofOpposition extends UnimplementedCard {
  constructor(game) {
    super(game, "Wall of Opposition", "Chronicles", "CHR");
  }
}

module.exports = WallofOpposition;
