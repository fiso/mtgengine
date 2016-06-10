"use strict";
const Constants = require ("../../../Constants");
const SeaSpriteBase = require("../set5ED/SeaSprite");

class SeaSprite extends SeaSpriteBase {
  constructor (game) {
    super(game, "Sea Sprite", "Homelands", "HML");
  }
}

module.exports = SeaSprite;
