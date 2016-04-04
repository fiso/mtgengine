"use strict";
const Constants = require ("../../../Constants");
const ThievingSpriteBase = require("../setLRW/ThievingSprite");

class ThievingSprite extends ThievingSpriteBase {
  constructor(game) {
    super(game, "Thieving Sprite", "Modern Masters", "MMA");
  }
}

module.exports = ThievingSprite;
