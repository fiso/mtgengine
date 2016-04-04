"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MoorishCavalry extends Card {
  constructor(game) {
    super(game, "Moorish Cavalry", "Arabian Nights", "ARN");
  }
}

module.exports = MoorishCavalry;
