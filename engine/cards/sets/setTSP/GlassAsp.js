"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GlassAsp extends Card {
  constructor(game) {
    super(game, "Glass Asp", "Time Spiral", "TSP");
  }
}

module.exports = GlassAsp;
