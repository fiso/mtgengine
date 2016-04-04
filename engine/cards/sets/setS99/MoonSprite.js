"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MoonSpriteBase = require("../setPOR/MoonSprite.js");

class MoonSprite extends MoonSpriteBase {
  constructor(game) {
    super(game, "Moon Sprite", "Starter 1999", "S99");
  }
}

module.exports = MoonSprite;
