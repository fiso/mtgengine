"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DetentionSphere extends UnimplementedCard {
  constructor (game) {
    super(game, "Detention Sphere", "Return to Ravnica", "RTR");
  }
}

module.exports = DetentionSphere;
