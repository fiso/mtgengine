"use strict";
const Constants = require ("../../../Constants");
const SphereofSafetyBase = require("../setC16/SphereofSafety");

class SphereofSafety extends SphereofSafetyBase {
  constructor (game) {
    super(game, "Sphere of Safety", "Return to Ravnica", "RTR");
  }
}

module.exports = SphereofSafety;
