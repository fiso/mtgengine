"use strict";
const Constants = require ("../../../Constants");
const MoonSpriteBase = require("../setPOR/MoonSprite");

class MoonSprite extends MoonSpriteBase {
  constructor(game) {
    super(game, "Moon Sprite", "Starter 2000", "S00");
  }
}

module.exports = MoonSprite;
