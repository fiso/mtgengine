"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LivingWall extends UnimplementedCard {
  constructor(game) {
    super(game, "Living Wall", "Collector's Edition", "CED");
  }
}

module.exports = LivingWall;
