"use strict";
const Constants = require ("../../../Constants");
const LivingPlaneBase = require("../setME3/LivingPlane");

class LivingPlane extends LivingPlaneBase {
  constructor (game) {
    super(game, "Living Plane", "Legends", "LEG");
  }
}

module.exports = LivingPlane;
