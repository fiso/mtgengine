"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShieldWall extends UnimplementedCard {
  constructor (game) {
    super(game, "Shield Wall", "Seventh Edition", "7ED");
  }
}

module.exports = ShieldWall;
