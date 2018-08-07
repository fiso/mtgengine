"use strict";
const Constants = require ("../../../Constants");
const ThievingSpriteBase = require("../setMMA/ThievingSprite");

class ThievingSprite extends ThievingSpriteBase {
  constructor (game) {
    super(game, "Thieving Sprite", "Lorwyn", "LRW");
  }
}

module.exports = ThievingSprite;
