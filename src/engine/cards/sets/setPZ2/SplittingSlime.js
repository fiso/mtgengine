"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SplittingSlime extends UnimplementedCard {
  constructor (game) {
    super(game, "Splitting Slime", "You Make the Cube", "PZ2");
  }
}

module.exports = SplittingSlime;
