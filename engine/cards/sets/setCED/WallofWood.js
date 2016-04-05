"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WallofWood extends UnimplementedCard {
  constructor(game) {
    super(game, "Wall of Wood", "Collector's Edition", "CED");
  }
}

module.exports = WallofWood;
