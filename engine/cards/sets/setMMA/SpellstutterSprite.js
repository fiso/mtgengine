"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SpellstutterSpriteBase = require("../setpFNM/SpellstutterSprite.js");

class SpellstutterSprite extends SpellstutterSpriteBase {
  constructor(game) {
    super(game, "Spellstutter Sprite", "Modern Masters", "MMA");
  }
}

module.exports = SpellstutterSprite;
