"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RealityTwist extends UnimplementedCard {
  constructor(game) {
    super(game, "Reality Twist", "Ice Age", "ICE");
  }
}

module.exports = RealityTwist;
