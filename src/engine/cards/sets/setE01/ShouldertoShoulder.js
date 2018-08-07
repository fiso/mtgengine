"use strict";
const Constants = require ("../../../Constants");
const ShouldertoShoulderBase = require("../setBBD/ShouldertoShoulder");

class ShouldertoShoulder extends ShouldertoShoulderBase {
  constructor (game) {
    super(game, "Shoulder to Shoulder", "Archenemy: Nicol Bolas", "E01");
  }
}

module.exports = ShouldertoShoulder;
