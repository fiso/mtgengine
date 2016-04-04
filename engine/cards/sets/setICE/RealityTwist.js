"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RealityTwist extends Card {
  constructor(game) {
    super(game, "Reality Twist", "Ice Age", "ICE");
  }
}

module.exports = RealityTwist;
