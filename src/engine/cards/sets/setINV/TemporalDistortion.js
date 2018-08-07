"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TemporalDistortion extends UnimplementedCard {
  constructor (game) {
    super(game, "Temporal Distortion", "Invasion", "INV");
  }
}

module.exports = TemporalDistortion;
