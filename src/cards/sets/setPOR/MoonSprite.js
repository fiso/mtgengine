"use strict";
const Constants = require ("../../../Constants");
const MoonSpriteBase = require("../setS00/MoonSprite");

class MoonSprite extends MoonSpriteBase {
  constructor (game) {
    super(game, "Moon Sprite", "Portal", "POR");
  }
}

module.exports = MoonSprite;
