"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VolatileRig extends Card {
  constructor(game) {
    super(game, "Volatile Rig", "Return to Ravnica", "RTR");
  }
}

module.exports = VolatileRig;
