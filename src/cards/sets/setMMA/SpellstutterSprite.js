"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpellstutterSprite extends UnimplementedCard {
  constructor (game) {
    super(game, "Spellstutter Sprite", "Modern Masters", "MMA");
  }
}

module.exports = SpellstutterSprite;
