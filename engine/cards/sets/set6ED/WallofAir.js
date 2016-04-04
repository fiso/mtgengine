"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WallofAir extends UnimplementedCard {
  constructor(game) {
    super(game, "Wall of Air", "Classic Sixth Edition", "6ED");
  }
}

module.exports = WallofAir;
