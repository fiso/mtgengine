"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SpriteNoble extends Card {
  constructor(game) {
    super(game, "Sprite Noble", "Time Spiral", "TSP");
  }
}

module.exports = SpriteNoble;
