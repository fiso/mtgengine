"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WallofFire extends UnimplementedCard {
  constructor (game) {
    super(game, "Wall of Fire", "Magic 2015", "M15");
  }
}

module.exports = WallofFire;
