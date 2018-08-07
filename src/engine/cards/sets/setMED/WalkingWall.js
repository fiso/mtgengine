"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WalkingWall extends UnimplementedCard {
  constructor (game) {
    super(game, "Walking Wall", "Masters Edition", "MED");
  }
}

module.exports = WalkingWall;
