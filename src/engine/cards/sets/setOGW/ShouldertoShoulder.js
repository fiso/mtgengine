"use strict";
const Constants = require ("../../../Constants");
const ShouldertoShoulderBase = require("../setBBD/ShouldertoShoulder");

class ShouldertoShoulder extends ShouldertoShoulderBase {
  constructor (game) {
    super(game, "Shoulder to Shoulder", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = ShouldertoShoulder;
