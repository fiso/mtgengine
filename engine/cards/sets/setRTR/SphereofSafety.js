"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SphereofSafety extends Card {
  constructor(game) {
    super(game, "Sphere of Safety", "Return to Ravnica", "RTR");
  }
}

module.exports = SphereofSafety;
