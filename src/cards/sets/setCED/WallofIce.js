"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WallofIce extends UnimplementedCard {
  constructor (game) {
    super(game, "Wall of Ice", "Collector's Edition", "CED");
  }
}

module.exports = WallofIce;
