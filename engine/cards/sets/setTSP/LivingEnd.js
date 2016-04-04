"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LivingEnd extends UnimplementedCard {
  constructor(game) {
    super(game, "Living End", "Time Spiral", "TSP");
  }
}

module.exports = LivingEnd;
