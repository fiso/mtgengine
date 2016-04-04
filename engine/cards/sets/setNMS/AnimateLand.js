"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AnimateLand extends Card {
  constructor(game) {
    super(game, "Animate Land", "Nemesis", "NMS");
  }
}

module.exports = AnimateLand;
