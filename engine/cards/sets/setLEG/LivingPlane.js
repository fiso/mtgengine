"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LivingPlane extends UnimplementedCard {
  constructor(game) {
    super(game, "Living Plane", "Legends", "LEG");
  }
}

module.exports = LivingPlane;
