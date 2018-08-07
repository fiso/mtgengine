"use strict";
const Constants = require ("../../../Constants");
const SeaSpriteBase = require("../setMED/SeaSprite");

class SeaSprite extends SeaSpriteBase {
  constructor (game) {
    super(game, "Sea Sprite", "World Championship Decks 1998", "WC98");
  }
}

module.exports = SeaSprite;
