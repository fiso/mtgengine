"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RealityRipple extends UnimplementedCard {
  constructor (game) {
    super(game, "Reality Ripple", "Mirage", "MIR");
  }
}

module.exports = RealityRipple;
