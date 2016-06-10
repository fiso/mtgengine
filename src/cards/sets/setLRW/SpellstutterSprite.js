"use strict";
const Constants = require ("../../../Constants");
const SpellstutterSpriteBase = require("../setpFNM/SpellstutterSprite");

class SpellstutterSprite extends SpellstutterSpriteBase {
  constructor (game) {
    super(game, "Spellstutter Sprite", "Lorwyn", "LRW");
  }
}

module.exports = SpellstutterSprite;
