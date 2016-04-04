"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TemporalDistortion extends Card {
  constructor(game) {
    super(game, "Temporal Distortion", "Invasion", "INV");
  }
}

module.exports = TemporalDistortion;
