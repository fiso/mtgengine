"use strict";
const Constants = require ("../../../Constants");
const SpriteNobleBase = require("../setEMA/SpriteNoble");

class SpriteNoble extends SpriteNobleBase {
  constructor (game) {
    super(game, "Sprite Noble", "Time Spiral", "TSP");
  }
}

module.exports = SpriteNoble;
