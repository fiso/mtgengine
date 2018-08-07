"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VibratingSphere extends UnimplementedCard {
  constructor (game) {
    super(game, "Vibrating Sphere", "Masters Edition IV", "ME4");
  }
}

module.exports = VibratingSphere;
