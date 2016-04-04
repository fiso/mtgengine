"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WallofFire extends UnimplementedCard {
  constructor(game) {
    super(game, "Wall of Fire", "Classic Sixth Edition", "6ED");
  }
}

module.exports = WallofFire;
