"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ScatteringStroke extends Card {
  constructor(game) {
    super(game, "Scattering Stroke", "Lorwyn", "LRW");
  }
}

module.exports = ScatteringStroke;
