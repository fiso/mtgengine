"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GroveoftheGuardian extends UnimplementedCard {
  constructor (game) {
    super(game, "Grove of the Guardian", "Return to Ravnica", "RTR");
  }
}

module.exports = GroveoftheGuardian;
