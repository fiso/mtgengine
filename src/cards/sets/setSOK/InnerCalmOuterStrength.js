"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class InnerCalmOuterStrength extends UnimplementedCard {
  constructor (game) {
    super(game, "Inner Calm, Outer Strength", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = InnerCalmOuterStrength;
