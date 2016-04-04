"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DetentionSphere extends Card {
  constructor(game) {
    super(game, "Detention Sphere", "Return to Ravnica", "RTR");
  }
}

module.exports = DetentionSphere;
