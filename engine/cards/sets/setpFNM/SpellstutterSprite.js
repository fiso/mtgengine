"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SpellstutterSprite extends Card {
  constructor(game) {
    super(game, "Spellstutter Sprite", "Friday Night Magic", "pFNM");
  }
}

module.exports = SpellstutterSprite;
