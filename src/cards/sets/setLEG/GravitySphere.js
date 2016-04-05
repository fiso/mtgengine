"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GravitySphere extends UnimplementedCard {
  constructor(game) {
    super(game, "Gravity Sphere", "Legends", "LEG");
  }
}

module.exports = GravitySphere;
