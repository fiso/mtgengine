"use strict";
const Constants = require ("../../../Constants");
const DistortionStrikeBase = require("../setIMA/DistortionStrike");

class DistortionStrike extends DistortionStrikeBase {
  constructor (game) {
    super(game, "Distortion Strike", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = DistortionStrike;
