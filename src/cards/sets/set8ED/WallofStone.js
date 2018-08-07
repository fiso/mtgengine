"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WallofStone extends UnimplementedCard {
  constructor (game) {
    super(game, "Wall of Stone", "Eighth Edition", "8ED");
  }
}

module.exports = WallofStone;
