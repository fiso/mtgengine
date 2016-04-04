"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class InnerCalmOuterStrength extends Card {
  constructor(game) {
    super(game, "Inner Calm, Outer Strength", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = InnerCalmOuterStrength;
