"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MetalFatigue extends Card {
  constructor(game) {
    super(game, "Metal Fatigue", "Darksteel", "DST");
  }
}

module.exports = MetalFatigue;
