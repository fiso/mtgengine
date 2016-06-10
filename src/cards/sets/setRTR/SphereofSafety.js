"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SphereofSafety extends UnimplementedCard {
  constructor (game) {
    super(game, "Sphere of Safety", "Return to Ravnica", "RTR");
  }
}

module.exports = SphereofSafety;
