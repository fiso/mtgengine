"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WallofIce extends UnimplementedCard {
  constructor (game) {
    super(game, "Wall of Ice", "Fourth Edition", "4ED");
  }
}

module.exports = WallofIce;
