"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LivingPlane extends UnimplementedCard {
  constructor (game) {
    super(game, "Living Plane", "Masters Edition III", "ME3");
  }
}

module.exports = LivingPlane;
