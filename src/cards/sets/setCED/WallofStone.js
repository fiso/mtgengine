"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WallofStone extends UnimplementedCard {
  constructor (game) {
    super(game, "Wall of Stone", "Collector's Edition", "CED");
  }
}

module.exports = WallofStone;
