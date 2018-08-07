"use strict";
const Constants = require ("../../../Constants");
const SpellstutterSpriteBase = require("../setMMA/SpellstutterSprite");

class SpellstutterSprite extends SpellstutterSpriteBase {
  constructor (game) {
    super(game, "Spellstutter Sprite", "Friday Night Magic 2011", "F11");
  }
}

module.exports = SpellstutterSprite;
