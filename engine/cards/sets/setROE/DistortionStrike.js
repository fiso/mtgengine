"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DistortionStrike extends Card {
  constructor(game) {
    super(game, "Distortion Strike", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = DistortionStrike;
