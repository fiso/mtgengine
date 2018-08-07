"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WallofAir extends UnimplementedCard {
  constructor (game) {
    super(game, "Wall of Air", "Tenth Edition", "10E");
  }
}

module.exports = WallofAir;
