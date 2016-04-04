"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WallofDust extends UnimplementedCard {
  constructor(game) {
    super(game, "Wall of Dust", "Fourth Edition", "4ED");
  }
}

module.exports = WallofDust;
