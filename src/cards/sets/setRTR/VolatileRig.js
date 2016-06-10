"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VolatileRig extends UnimplementedCard {
  constructor (game) {
    super(game, "Volatile Rig", "Return to Ravnica", "RTR");
  }
}

module.exports = VolatileRig;
