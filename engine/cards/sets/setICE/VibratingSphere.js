"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VibratingSphere extends UnimplementedCard {
  constructor(game) {
    super(game, "Vibrating Sphere", "Ice Age", "ICE");
  }
}

module.exports = VibratingSphere;
