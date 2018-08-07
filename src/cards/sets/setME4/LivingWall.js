"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LivingWall extends UnimplementedCard {
  constructor (game) {
    super(game, "Living Wall", "Masters Edition IV", "ME4");
  }
}

module.exports = LivingWall;
