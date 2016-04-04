"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ConsumeStrength extends Card {
  constructor(game) {
    super(game, "Consume Strength", "Apocalypse", "APC");
  }
}

module.exports = ConsumeStrength;
