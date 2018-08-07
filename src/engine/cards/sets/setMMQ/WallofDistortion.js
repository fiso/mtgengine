"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WallofDistortion extends UnimplementedCard {
  constructor (game) {
    super(game, "Wall of Distortion", "Mercadian Masques", "MMQ");
  }
}

module.exports = WallofDistortion;
