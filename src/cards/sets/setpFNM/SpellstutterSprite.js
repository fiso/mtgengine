"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpellstutterSprite extends UnimplementedCard {
  constructor (game) {
    super(game, "Spellstutter Sprite", "Friday Night Magic", "pFNM");
  }
}

module.exports = SpellstutterSprite;
