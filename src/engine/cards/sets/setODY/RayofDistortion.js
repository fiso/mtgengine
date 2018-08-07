"use strict";
const Constants = require ("../../../Constants");
const RayofDistortionBase = require("../setWC03/RayofDistortion");

class RayofDistortion extends RayofDistortionBase {
  constructor (game) {
    super(game, "Ray of Distortion", "Odyssey", "ODY");
  }
}

module.exports = RayofDistortion;
