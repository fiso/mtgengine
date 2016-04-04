"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WallofWater extends UnimplementedCard {
  constructor(game) {
    super(game, "Wall of Water", "Collector's Edition", "CED");
  }
}

module.exports = WallofWater;
