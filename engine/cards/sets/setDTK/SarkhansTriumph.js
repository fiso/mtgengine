"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SarkhansTriumph extends Card {
  constructor(game) {
    super(game, "Sarkhan's Triumph", "Dragons of Tarkir", "DTK");
  }
}

module.exports = SarkhansTriumph;
