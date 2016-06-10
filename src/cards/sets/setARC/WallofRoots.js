"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WallofRoots extends UnimplementedCard {
  constructor (game) {
    super(game, "Wall of Roots", "Archenemy", "ARC");
  }
}

module.exports = WallofRoots;
