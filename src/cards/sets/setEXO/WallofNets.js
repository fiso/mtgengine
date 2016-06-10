"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WallofNets extends UnimplementedCard {
  constructor (game) {
    super(game, "Wall of Nets", "Exodus", "EXO");
  }
}

module.exports = WallofNets;
