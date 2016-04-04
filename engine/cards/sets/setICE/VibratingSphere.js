"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VibratingSphere extends Card {
  constructor(game) {
    super(game, "Vibrating Sphere", "Ice Age", "ICE");
  }
}

module.exports = VibratingSphere;
