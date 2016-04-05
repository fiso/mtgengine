"use strict";
const Constants = require ("../../../Constants");
const LivingPlaneBase = require("../setLEG/LivingPlane");

class LivingPlane extends LivingPlaneBase {
  constructor(game) {
    super(game, "Living Plane", "Masters Edition III", "ME3");
  }
}

module.exports = LivingPlane;
